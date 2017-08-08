import { FETCH_DUCKS, SAVE_DUCK, UPDATE_DUCK, CLEAR_POND } from '../constants';

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
      break;
    case UPDATE_DUCK:
      newState.ducks = state.ducks.filter(e => e.id !== action.payload.data.id)
        .concat(action.payload.data);
      break;
    default:
      return newState;
  }
  return newState;
};
