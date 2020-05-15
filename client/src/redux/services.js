import axios from 'axios'

axios.defaults.baseURL = '/api/v1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const API_PATH = {
  SIGN_UP: '/auth/register',
  SIGN_IN: '/auth/login',
  LOG_OUT: '/auth/logout',
  BOARD_CREATE: '/boards/create',
  BOARD_GET_ALL: '/boards',
  BOARD_DELETE: '/boards/',
}

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const auth = () => {
  const signUp = async credentials => await axios.post(
      API_PATH.SIGN_UP, credentials)

  const signIn = async credentials => await axios.post(
      API_PATH.SIGN_IN, credentials)

  const logOut = async () => await axios.get(API_PATH.LOG_OUT)

  return {signUp, signIn, logOut}
}


export const boards = () => {
  const create = async credentials => {
    return await axios.post(API_PATH.BOARD_CREATE, credentials)
  }

  const all = async () => {
    return await axios.get(API_PATH.BOARD_GET_ALL)
  }

  const remove = async (id) => {
    return await axios.delete(API_PATH.BOARD_DELETE + id)
  }

  return {create, all, remove}
}

