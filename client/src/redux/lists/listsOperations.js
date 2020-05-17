import * as api from '../services'
import {
  createCardError,
  createCardRequest,
  createCardSuccess,
  listPatchError,
  listPatchRequest,
  listPatchSuccess,
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

// export const handlePatchList = (id, lists) => dispatch => {
//   dispatch(listPatchRequest());
//   return axios
//       .patch(`/boards/patch/${id}`, {lists})
//       .then(response => {
//         return dispatch(listPatchSuccess(response.data.board.lists));
//       })
//       .catch(error => dispatch(listPatchError(error)));
// };

// export const handleCreateCards = (id, card) => dispatch => {
//   dispatch(createCardRequest());
//   return axios
//       .post(`/cards/create`, {id, card})
//       .then(response => {
//         return dispatch(createCardSuccess(response.data.board.lists));
//       })
//       .catch(error => dispatch(createCardError(error)));
// };