import * as api from '../services'
import {
  createCardError,
  createCardRequest,
  createCardSuccess,
  listPatchError,
  listPatchRequest,
  listPatchSuccess,
    listAccessRequest,
    listAccessSuccess,
    listAccessError,
  listsError,
  listsRequest,
  listsSuccess
} from './listsActions';

export const listsHandler = boardId => dispatch => {
  dispatch(listsRequest());
  return api.lists().all(boardId)
      .then(response => {
        return dispatch(listsSuccess(response.data.data));
      })
      .catch(error => {
        return dispatch(listsError(error))
      });
};

export const listsPatchHandler = credential => dispatch => {
  dispatch(listPatchRequest());
  return api.lists().patch(credential)
      .then(response => {
        return dispatch(listPatchSuccess(response.data.data));
      })
      .catch(error => {
        return dispatch(listPatchError(error))
      });
};

export const handleListAccess = credentials => dispatch => {
  dispatch(listAccessRequest());
  return api.lists().access(credentials)
      .then(response => {
        return dispatch(listAccessSuccess(response.data.data));
      })
      .catch(error => dispatch(listAccessError(error)));
};