import { combineReducers } from 'redux';
import { ActionTypes } from '../actionTypes';

const accessReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.BOARDS_SUCCESS:
    case ActionTypes.BOARD_CREATE_SUCCESS:
    case ActionTypes.BOARD_DELETE_SUCCESS:
      return payload

    case ActionTypes.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.BOARDS_REQUEST:
    case ActionTypes.BOARD_CREATE_REQUEST:
    case ActionTypes.BOARD_DELETE_REQUEST:
      return true;

    case ActionTypes.BOARDS_SUCCESS:
    case ActionTypes.BOARD_CREATE_SUCCESS:
    case ActionTypes.BOARD_DELETE_SUCCESS:
    case ActionTypes.BOARDS_ERROR:
    case ActionTypes.BOARD_CREATE_ERROR:
    case ActionTypes.BOARD_DELETE_ERROR:
      return false;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.BOARDS_ERROR:
    case ActionTypes.BOARD_CREATE_ERROR:
    case ActionTypes.BOARD_DELETE_ERROR:
      return payload.error;

    case ActionTypes.BOARDS_REQUEST:
    case ActionTypes.BOARDS_SUCCESS:
    case ActionTypes.BOARD_CREATE_REQUEST:
    case ActionTypes.BOARD_CREATE_SUCCESS:
    case ActionTypes.BOARD_DELETE_REQUEST:
    case ActionTypes.BOARD_DELETE_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  boards : accessReducer,
  loading : loadingReducer,
  error,
});
