import * as api from '../services'
import {
  boardsError,
  boardsRequest,
  boardsSuccess,
    boardCreateRequest,
    boardCreateSuccess,
    boardCreateError,
  deleteBoardError,
  deleteBoardRequest,
  deleteBoardSuccess
} from './boardsActions';

export const boardCreate = credentials => dispatch => {
  dispatch(boardCreateRequest());
  return api.boards().create(credentials)
      .then(response => {
        return dispatch(boardCreateSuccess(response.data.boards));
      })
      .catch(error => dispatch(boardCreateError(error)));
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