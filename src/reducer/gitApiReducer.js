import update from 'immutability-helper';
import * as types from './gitApiAction';

const initialState = {
  repoSearch: {
    status: 'INIT',
    data: {},
  },
  issueList: {
    status: 'INIT',
    data: {},
  },
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case types.REPO_SEARCH:
      return update(state, {
        repoSearch: {
          status: { $set: 'WAITING' },
        },
      });
    case types.REPO_SEARCH_SUCCESS:
      return update(state, {
        repoSearch: {
          status: { $set: 'SUCCESS' },
          data: { $set: action.data },
        },
      });
    case types.REPO_SEARCH_FAILURE:
      return update(state, {
        repoSearch: {
          status: { $set: 'FAILURE' },
        },
      });
    case types.ISSUE_LIST:
      return update(state, {
        issueList: {
          status: { $set: 'WAITING' },
        },
      });
    case types.ISSUE_LIST_SUCCESS:
      return update(state, {
        issueList: {
          status: { $set: 'SUCCESS' },
          data: { $set: action.data },
        },
      });
    case types.ISSUE_LIST_FAILURE:
      return update(state, {
        issueList: {
          status: { $set: 'FAILURE' },
        },
      });
    default:
      return state;
  }
}
