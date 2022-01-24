export type Cat = {
    id: number;
    name: string;
    breed: {
        id: number;
        name: string;
    },
    weight: {
        value: number;
        units: string;
    };


}

export type Data = {
    cats: Cat[];
}
