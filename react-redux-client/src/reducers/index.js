// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {productReducer} from './productReducer';
import appReducer from './appReducer';

export default combineReducers({
  productState:productReducer,
  appState: appReducer,
  routing
  // More reducers if there are
  // can go here
})
