import { FETCH_PONDS, FETCH_ONE_POND, SAVE_POND } from '../constants';

const initialState = {
  currentPond: null,
  ponds: [],
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_PONDS:
      newState.ponds = action.payload.data;
      break;
    case FETCH_ONE_POND:
      newState.currentPond = action.payload.data;
      break;
    case SAVE_POND:
      newState.ponds = [...state.ponds, action.payload.data];
      newState.currentPond = action.payload.data;
      break;
    default:
      return newState;
  }
  return newState;
};
