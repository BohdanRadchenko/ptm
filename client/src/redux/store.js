import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import controllerReducer from './controller/controllerReducers';
import sessionReducer from "./session/sessionReducer";
import boardsReducer from "./boards/boardsReducer";
import listsReducer from "./lists/listsReducer";
import usersReducer from "./users/usersReducer";

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  controller : controllerReducer,
  session: sessionReducer,
  boards : boardsReducer,
  lists : listsReducer,
  users : usersReducer
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;