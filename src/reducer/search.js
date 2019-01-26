import {
    SEARCH_ARTICLES_SUCCESS,
    SEARCH_ARTICLES_FAILURE,
} from '../action/search';

export default function search (state = {
    search: []
}, action) {
    switch (action.type) {
        case SEARCH_ARTICLES_SUCCESS:
            return {
                ...state,
                search: action.result
            };
        case SEARCH_ARTICLES_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}