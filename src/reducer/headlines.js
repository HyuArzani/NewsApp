import {
    GET_HEADLINES_LIST_SUCCESS,
    GET_HEADLINES_LIST_FAILURE,
} from '../action/headlines';

export default function headlines (state = {
    headlines: {
        us:[],
        id:[],
        my:[],
        sg:[],
        cn:[]
    }
}, action) {
    switch (action.type) {
        case GET_HEADLINES_LIST_SUCCESS:
            let head = state.headlines;
            let arr = head[action.country];
            head[action.country]=arr.concat(action.result);
            return {
                ...state,
                headlines: head
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