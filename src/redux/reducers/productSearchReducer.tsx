import { GET_DATA, ProjectActionTypes, StoreState } from '../types/types';
import { Idata } from '../types/types'

const initialState: StoreState = {
    data: [],
};

const productSearchReducer = (state = initialState, action: ProjectActionTypes): StoreState => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};

export const getDataAC = (data: Idata) => {
    return {type: GET_DATA, data}
};


export default productSearchReducer;
