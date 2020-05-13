import { ActionTypes } from "../actionTypes";

//  Sign UP
export const signUpRequest = () => ({
  type: ActionTypes.SIGN_UP_REQUEST,
});

export const signUpSuccess = response => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
  payload: {response} ,
});

export const signUpError = error => ({
  type: ActionTypes.SIGN_UP_ERROR,
  payload: { error },
});


//  Log IN
export const signInRequest = () => ({
  type: ActionTypes.SIGN_IN_REQUEST,
});

export const signInSuccess = response => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: {response} ,
});

export const signInError = error => ({
  type: ActionTypes.SIGN_IN_ERROR,
  payload: { error },
});
