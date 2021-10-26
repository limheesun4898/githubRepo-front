// import axios from '../util/AxiosWrapper';
import axios from "axios";

export const REPO_SEARCH = 'REPO_SEARCH';
export const REPO_SEARCH_SUCCESS = 'REPO_SEARCH_SUCCESS';
export const REPO_SEARCH_FAILURE = 'REPO_SEARCH_FAILURE';


export function repoSearch() {
    return {
        type: REPO_SEARCH,
    }
}

export function repoSearchSuccess(data) {
    return {
        type: REPO_SEARCH_SUCCESS,
        data,
    };
}

export function repoSearchFailure() {
    return {
        type: REPO_SEARCH_FAILURE,
    };
}

export function repoSearchRequest() {
    return (dispatch) => {
        dispatch(repoSearch());
        return axios.get(`${process.env.REACT_APP_HOST}/search/repositories?q=how_about_cafe`)
        .then((response) => {
            dispatch(repoSearchSuccess(response));
        }).catch((error) => {
            dispatch(repoSearchFailure());
        })

    }
}