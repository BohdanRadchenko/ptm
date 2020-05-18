import { ActionTypes } from "../actionTypes";

//USERS ALL
export const usersRequest = () => ({
  type: ActionTypes.USERS_REQUEST,
});

export const usersSuccess = response => ({
  type: ActionTypes.USERS_SUCCESS,
  payload: response,
});

export const usersError = error => ({
  type: ActionTypes.USERS_ERROR,
  payload: error ,
});


//ACCESS USERS
export const accessUsersRequest = () => ({
  type: ActionTypes.USERS_ACCESS_REQUEST,
  payload : []
});

export const accessUsersSuccess = response => ({
  type: ActionTypes.USERS_ACCESS_SUCCESS,
  payload: response,
});

export const accessUsersError = error => ({
  type: ActionTypes.USERS_ACCESS_ERROR,
  payload: error ,
});

