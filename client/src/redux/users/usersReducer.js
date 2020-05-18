import { combineReducers } from 'redux';
import { ActionTypes } from '../actionTypes';

const accessUsersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.USERS_ACCESS_REQUEST:
    case ActionTypes.USERS_ACCESS_SUCCESS:
      return payload

    default:
      return state;
  }
};

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.USERS_SUCCESS:
      return payload

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_UP_ERROR:
      return payload.error;

    case ActionTypes.SIGN_UP_SUCCESS:
      return null;

    default:
      return state;
  }
};


export default combineReducers({
  access : accessUsersReducer,
  users : usersReducer,
  error,
});
