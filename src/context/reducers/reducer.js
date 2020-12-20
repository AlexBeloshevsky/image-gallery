import {RESET, SEARCH, UPDATE_RESULTS, DELETE_IMAGE} from '../types/types';
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
        case UPDATE_RESULTS:
            return {
                ...state,
                results: action.payload,
                photos: action.payload.photos
            }
        case DELETE_IMAGE:
            const deleteId = action.payload;
            const array = state.photos.filter((item) => {
                return item.id !== deleteId
            });
        
            return {
                ...state,
                photos: array
            }
        default:
            return state;
    }
}