import {
    GET_HEADLINES_LIST_SUCCESS,
    GET_HEADLINES_LIST_FAILURE,
} from '../action/headlines';

export default function headlines (state = {
    headlines: []
}, action) {
    switch (action.type) {
        case GET_HEADLINES_LIST_SUCCESS:
            return {
                ...state,
                headlines: action.result
            };
        case GET_HEADLINES_LIST_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}