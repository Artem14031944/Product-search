export const GET_DATA = "GET_DATA";


export interface IgetData {
    type: typeof GET_DATA
    data: []
};

export interface StoreState {
    data: [];
};

export type ProjectActionTypes =
  | IgetData
 

export interface Iitem {
    article: string;
    id: number;
    name: string,
    price: number;
    quantity: number;
    brand: {
        id: number,
        name: string,
    };
};


export interface Idata {
    data: Iitem[]
};