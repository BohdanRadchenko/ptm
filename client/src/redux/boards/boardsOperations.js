import * as api from '../services'
import {
  boardCreateError,
  boardCreateRequest,
  boardCreateSuccess,
  boardsError,
  boardsRequest,
  boardsSuccess,
  deleteBoardError,
  deleteBoardRequest,
  deleteBoardSuccess
} from './boardsActions';

export const handleBoardCreate = credentials => dispatch => {
  dispatch(boardCreateRequest());
  return api.boards().create(credentials)
      .then(response => {
        return dispatch(boardCreateSuccess(response.data.boards));
      })
      .catch(error => dispatch(boardCreateError(error)));
};

export const handleBoards = () => dispatch => {
  dispatch(boardsRequest());
  return api.boards().all()
      .then(response => {
        return dispatch(boardsSuccess(response.data.boards));
      })
      .catch(error => dispatch(boardsError(error)));
};


export const handleDeleteBoard = id => dispatch => {
  dispatch(deleteBoardRequest());
  api.boards().remove(id)
      .then(response => {
        return dispatch(deleteBoardSuccess(response.data.boards));
      })
      .catch(error => dispatch(deleteBoardError(error)));
};