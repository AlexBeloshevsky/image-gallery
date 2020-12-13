import {RESET, SEARCH} from '../types/types';
import {initialState} from '../initialState';

export const imageReducer = (state = initialState, action) => {
    switch(action.type){
        case RESET:
            return initialState
        case SEARCH:
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }
}