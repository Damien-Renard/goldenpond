import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/* ---- Import Other Reducers ---- */
import Duck from './duck';
import Pond from './pond';

export default combineReducers({
  duck: Duck,
  pond: Pond,
  routing: routerReducer,
});
