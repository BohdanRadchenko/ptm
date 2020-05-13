import * as api from '../services'
import {
  boardsError,
  boardsRequest,
  boardsSuccess,
    boardsCreateRequest,
    boardsCreateSuccess,
    boardsCreateError,
  deleteBoardError,
  deleteBoardRequest,
  deleteBoardSuccess
} from './boardsActions';

export const boardsCreate = credentials => dispatch => {
  dispatch(boardsRequest());
  return api.boards().create(credentials)
      .then(response => {
        return dispatch(boardsSuccess(response.data.boards));
      })
      .catch(error => dispatch(boardsError(error)));
};
//
// export const getBoardsAll = credentials => dispatch => {
//   dispatch(boardsRequest());
//   return axios
//       .get('/boards/all')
//       .then(response => {
//         return dispatch(boardsSuccess(response.data.boards));
//       })
//       .catch(error => dispatch(boardsError(error)));
// };
//
//
// export const deleteBoard = id => dispatch => {
//   dispatch(deleteBoardRequest());
//   return axios
//       .delete(`/boards/${id}`)
//       .then(response => {
//         return dispatch(deleteBoardSuccess(response.data.boards));
//       })
//       .catch(error => dispatch(deleteBoardError(error)));
// };