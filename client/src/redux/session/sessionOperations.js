import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccesss,
  signInError,
} from './sessionActions';
// import {getToken} from './sessionSelectors';
import {addLocalStorage} from '../../helpers/localStorage.helpers'

axios.defaults.baseURL = '/api/v1';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

// const clearAuthToken = () => {
//   axios.defaults.headers.common.Authorization = null;
// };

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  return axios
      .post('/auth/register', credentials)
      .then(response => {
        // if (response.data.error) return dispatch(signUpError(response.data.error));
        addLocalStorage(response.data)
        setAuthToken(response.data.token)
        dispatch(signUpSuccess(response.data));
        return dispatch(signInSuccesss(response.data));
      })
      .catch(error => dispatch(signUpError(error)));
};

export const login = credentials => dispatch => {
  dispatch(signInRequest());
  return axios
      .post('/auth/login', credentials)
      .then(response => {
        addLocalStorage(response.data)
        setAuthToken(response.data.token)
        return dispatch(signInSuccesss(response.data));
      })
      .catch(error => dispatch(signInError(error)));
};
