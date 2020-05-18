import axios from 'axios'

axios.defaults.baseURL = '/api/v1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const API_PATH = {
  //AUTH
  SIGN_UP: '/auth/register',
  SIGN_IN: '/auth/login',
  LOG_OUT: '/auth/logout',
  //BOARD
  BOARD_CREATE: '/boards/create',
  BOARD_GET_ALL: '/boards',
  BOARD_DELETE: '/boards/',
  //LIST
  LIST: '/lists',
  LIST_ACCESS: '/lists/access',
  //USERS
  USERS: '/users',
  USERS_ID: '/users/',
  USERS_ACCESS: '/users/access',
}

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

//API AUTH
export const auth = () => {
  const signUp = async credentials => await axios.post(
      API_PATH.SIGN_UP, credentials)

  const signIn = async credentials => await axios.post(
      API_PATH.SIGN_IN, credentials)

  const logOut = async () => await axios.get(API_PATH.LOG_OUT)

  return {signUp, signIn, logOut}
}

//API BOARDS
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

//API LISTS
export const lists = () => {
  const all = async (id) => {
    return await axios.get(API_PATH.LIST + '/' + id)
  }

  const patch = async (credential) => {
    return await axios.patch(API_PATH.LIST, credential)
  }

  const access = async (credential) => {
    return await axios.post(API_PATH.LIST_ACCESS, credential)
  }

  return {all, access, patch}
}

//API USERS
export const users = () => {
  const user = async (id) => {
    return await axios.get(API_PATH.USERS_ID + id)
  }

  const users = async () => {
    return await axios.get(API_PATH.USERS)
  }

  const access = async (credentials) => {
    return await axios.post(API_PATH.USERS_ACCESS, credentials)
  }
  return {user, access, users}
}

