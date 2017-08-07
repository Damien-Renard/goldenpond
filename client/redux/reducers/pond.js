import { FETCH_PONDS, FETCH_ONE_POND, SAVE_POND, UPDATE_POND, DELETE_POND } from '../constants';

const initialState = {
  currentPond: null,
  ponds: [],
  sizeX: null,
  sizeY: null,
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
    // case UPDATE_POND:
    //   return newState.ponds.filter(e => e.id !== action.payload.id).concat(action.payload);
    // case DELETE_POND:
    //   return newState.ponds.filter(e => e.id !== action.payload.id);
    default:
      return newState;
  }
  return newState;
};
