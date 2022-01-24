import { FastifyPluginAsync, RequestGenericInterface } from 'fastify'
import { createCat, deleteCat, getCats, getCatById, searchByName } from '../../models/cats'
import { Cat } from '../../type'

interface requestGeneric extends RequestGenericInterface {
  Querystring: {
    q: string
  }
  Body: Cat
  Params: {
    id?: string
  }
}

const handler: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/cats', async (request, reply) => {
    return getCats()
  })
  fastify.get<requestGeneric>('/cat/:id', async (request, reply) => {
    const { id } = request.params
    if (!id) throw new Error('id is required')
    return getCatById(Number(id))
  })
  fastify.get<requestGeneric>('/search', async (request, reply) => {
    const { q: searchTerm } = request.query
    return searchByName(searchTerm)
  })
  fastify.post<requestGeneric>('/cat', async (request, reply) => {
    const { id, name, breed, weight } = request.body
    return createCat({ id, name, breed, weight })
  })
  fastify.delete<requestGeneric>('/cat/:id', async (request, reply) => {
    const { id } = request.params
    if (!id) throw new Error('id is required')
    return deleteCat(Number(id))
  })
}

export default handler
