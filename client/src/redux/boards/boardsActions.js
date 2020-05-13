import { ActionTypes } from "../actionTypes";

//BOARDS
export const boardsRequest = () => ({
  type: ActionTypes.BOARDS_REQUEST,
});

export const boardsSuccess = response => ({
  type: ActionTypes.BOARDS_SUCCESS,
  payload: {response},
});

export const boardsError = error => ({
  type: ActionTypes.BOARDS_ERROR,
  payload: { error },
});

//CREATE BOARDS
export const boardsCreateRequest = () => ({
  type: ActionTypes.BOARD_CREATE_REQUEST,
});

export const boardsCreateSuccess = response => ({
  type: ActionTypes.BOARD_CREATE_SUCCESS,
  payload: {response},
});

export const boardsCreateError = error => ({
  type: ActionTypes.BOARD_CREATE_ERROR,
  payload: { error },
});


//DELETE BOARD
export const deleteBoardRequest = () => ({
  type: ActionTypes.BOARD_DELETE_REQUEST,
});

export const deleteBoardSuccess = response => ({
  type: ActionTypes.BOARD_DELETE_SUCCESS,
  payload: {response},
});

export const deleteBoardError = error => ({
  type: ActionTypes.BOARD_DELETE_ERROR,
  payload: { error },
});
