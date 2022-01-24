import { Cat } from '../type'
// import db from '../helpers/connection';

const db = {
  cats: [
    {
      id: 1,
      name: 'Fluf Fluff',
      breed: {
        id: 1,
        name: 'Tammy'
      },
      weight: {
        value: 1,
        units: 'kilograms'
      }
    },
    {
      id: 2,
      name: 'Fun Fun',
      breed: {
        id: 1,
        name: 'Tammy'
      },
      weight: {
        value: 5,
        units: 'kilograms'
      }
    },
    {
        id: 3,
        name: 'Fluffy',
        breed: {
          id: 1,
          name: 'Cosmo'
        },
        weight: {
          value: 5.6,
          units: 'kilograms'
        }
      }
  ]
}

export const getCats = async () => {
  //   const { cats } = await db.getAll();
  return {
    cats: db.cats
  }
}
export const createCat = async (data: Cat) => {
  db.cats.push(data)

  return data
}
export const deleteCat = async (id: number) => {
  // const index = db.cats.findIndex(cat => cat.id === id)
  // if(index === -1) throw new Error('cat not found')
  //   db.data.cats.delete(index)
  return id
}
export const getCatById = async (id: number) => {
    const cat = db.cats.find(cat => cat.id === id)
    // const index = db.cats.findIndex(cat => cat.id === id)
    // if(index === -1) throw new Error('cat not found')
    //   db.data.cats.delete(index)
    return cat || null
}
export const searchByName = async (searchTerm: string) => {
    const cats = db.cats.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()))
    // const index = db.cats.findIndex(cat => cat.id === id)
    // if(index === -1) throw new Error('cat not found')
    //   db.data.cats.delete(index)
    return cats || {}
}
