import axios from 'axios';
import {NEWS_API, TIMEOUT} from '../../config.js';

export const SEARCH_ARTICLES_SUCCESS = "SEARCH_ARTICLES_SUCCESS";
export const SEARCH_ARTICLES_FAILURE = "SEARCH_ARTICLES_FAILURE";

export const searchHeadlines = (keyword) => {
    return (dispatch) => {
        return axios.get('https://newsapi.org/v2/everything?q='+keyword+'&apiKey='+NEWS_API,{timeout: TIMEOUT})
        .then(result => {
            if(result.data && result.data.articles)
                return dispatch(searchHeadLinesSuccess(result.data.articles));
            else
                return dispatch(searchHeadLinesFailure(new Error("No articles found")))
        })
        .catch(error => {
            return dispatch(searchHeadLinesFailure(error));
        })
    }
}

const searchHeadLinesSuccess = (result) => {
    return {
        type: SEARCH_ARTICLES_SUCCESS,
        result: result,
    }
};
const searchHeadLinesFailure = (error) =>({type: SEARCH_ARTICLES_FAILURE, error: error});