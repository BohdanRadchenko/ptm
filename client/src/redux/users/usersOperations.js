import * as api from '../services'
import {
  accessUsersRequest,
    accessUsersSuccess,
    accessUsersError,
    usersRequest,
    usersSuccess,
    usersError
} from './usersActions';

export const handleAllUsers = () => dispatch => {
  dispatch(usersRequest());
  return api.users().users()
      .then(response => {
        return dispatch(usersSuccess(response.data.users));
      })
      .catch(error => dispatch(usersError(error)));
};

export const handleAccessUsers = credentials => dispatch => {
  dispatch(accessUsersRequest());
  return api.users().access(credentials)
      .then(response => {
        return dispatch(accessUsersSuccess(response.data.users));
      })
      .catch(error => dispatch(accessUsersError(error)));
};

