import axios from 'axios';
import {NEWS_API, TIMEOUT} from '../../config.js';

export const GET_HEADLINES_LIST_SUCCESS = "GET_HEADLINES_LIST_SUCCESS";
export const GET_HEADLINES_LIST_FAILURE = "GET_HEADLINES_LIST_FAILURE";

export const getHeadLines = (country) => {
    return (dispatch) => {
        return axios.get('https://newsapi.org/v2/top-headlines?country='+country+'&apiKey='+NEWS_API,{timeout: TIMEOUT})
            .then(result => {
                if(result.data && result.data.articles)
                    return dispatch(getHeadLinesSuccess(result.data.articles));
                else
                    return dispatch(getHeadLinesFailure(new Error("No articles found")))
            })
            .catch(error => {
                return dispatch(getHeadLinesFailure(error));
        })
    }
};

const getHeadLinesSuccess = (result) => {
    return {
        type: GET_HEADLINES_LIST_SUCCESS,
        result: result,
    }
};
const getHeadLinesFailure = (error) =>({type: GET_HEADLINES_LIST_FAILURE, error: error});
