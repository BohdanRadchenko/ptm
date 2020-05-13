import * as api from '../services'
import {
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from './sessionActions';

import {addLocalStorage} from '../../helpers/localStorage.helpers'

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  return api.auth().signUp(credentials)
      .then(response => {
        addLocalStorage(response.data)
        api.setAuthToken(response.data.token)
        return dispatch(signUpSuccess(response.data));
      })
      .catch(error => dispatch(
          signUpError(error.response.data.message)));
};

export const login = credentials => dispatch => {
  dispatch(signInRequest());
  return api.auth().signIn(credentials)
      .then(response => {
        addLocalStorage(response.data)
        api.setAuthToken(response.data.token)
        return dispatch(signInSuccess(response.data));
      })
      .catch(error => dispatch(signInError(error)));
};
