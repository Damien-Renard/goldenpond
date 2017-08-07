import { FETCH_DUCKS, SAVE_DUCK, UPDATE_DUCK, DELETE_DUCK, CLEAR_POND } from '../constants';

const initialState = {
  ducks: [],
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_DUCKS:
      newState.ducks = action.payload.data;
      break;
    case SAVE_DUCK:
      newState.ducks = [...state.ducks, action.payload.data];
      break;
    case CLEAR_POND:
      newState.ducks = [];
    // case UPDATE_DUCK:
    //   return newState.ducks.filter(e => e.id !== action.payload.id).concat(action.payload);
    // case DELETE_DUCK:
    //   return newState.ducks.filter(e => e.id !== action.payload.id);
    default:
      return newState;
  }
  return newState;
};
