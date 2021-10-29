import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_GIT_HOST;
axios.defaults.headers.common.Authorization = `token ${process.env.REACT_APP_GIT_ACCESS_TOKEN}`;

export const REPO_SEARCH = 'REPO_SEARCH';
export const REPO_SEARCH_SUCCESS = 'REPO_SEARCH_SUCCESS';
export const REPO_SEARCH_FAILURE = 'REPO_SEARCH_FAILURE';

export const ISSUE_LIST = 'ISSUE_LIST';
export const ISSUE_LIST_SUCCESS = 'ISSUE_LIST_SUCCESS';
export const ISSUE_LIST_FAILURE = 'ISSUE_LIST_FAILURE';

export function repoSearch() {
  return {
    type: REPO_SEARCH,
  };
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

export function repoSearchRequest(repo) {
  return (dispatch) => {
    dispatch(repoSearch());
    return axios.get(`/search/repositories?q=${repo}`)
      .then((response) => {
        dispatch(repoSearchSuccess(response.data));
      }).catch((error) => {
        dispatch(repoSearchFailure());
      });
  };
}

export function issueList() {
  return {
    type: ISSUE_LIST,
  };
}

export function issueListSuccess(data) {
  return {
    type: ISSUE_LIST_SUCCESS,
    data,
  };
}

export function issueListFailure() {
  return {
    type: ISSUE_LIST_FAILURE,
  };
}

export function issueListRequest(repoName, page) {
  return (dispatch) => {
    dispatch(issueList());
    return axios.get(`/search/issues?q=repo:${repoName}&page=${page}&per_page=10`)
      .then((response) => {
        dispatch(issueListSuccess(response.data));
      }).catch((error) => {
        dispatch(issueListFailure());
      });
  };
}
