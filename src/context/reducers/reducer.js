import {RESET, SEARCH, UPDATE_RESULTS, DELETE_IMAGE, ADD_MORE_RESULTS} from '../types/types';
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
                photos: action.payload.photos,
            }
        case ADD_MORE_RESULTS:     
            return {
                ...state,
                results: {...state.results, ...action.payload},
                photos: [...state.photos, ...action.payload.photos],
                page: state.page + 1
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