import { ActionTypes } from "../actionTypes";

//USER
export const accessRequest = () => ({
  type: ActionTypes.USER_REQUEST,
});

export const accessSuccess = response => ({
  type: ActionTypes.USER_SUCCESS,
  payload: response,
});

export const accessError = error => ({
  type: ActionTypes.USER_ERROR,
  payload: { error },
});
