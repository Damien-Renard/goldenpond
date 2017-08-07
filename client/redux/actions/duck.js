import axios from 'axios';

import * as CONST from '../constants';

export const clearPond = pondId => (
  (dispatch) => {
    axios.delete(`/api/duck/reset/${pondId}`)
    .then(pond => dispatch({
      type: CONST.CLEAR_POND,
      payload: pond,
    }));
  }
);

export const fetchDucks = pondId => (
  (dispatch) => {
    axios.get(`/api/duck/fetch/${pondId}`)
    .then(ducks => dispatch({
      type: CONST.FETCH_DUCKS,
      payload: ducks,
    }));
  }
);

export const saveDuck = newDuck => (
  (dispatch) => {
    axios.post('/api/duck', newDuck)
    .then(savedDuck => dispatch({
      type: CONST.SAVE_DUCK,
      payload: savedDuck,
    }));
  }
);

export const updateDuck = (duckId, updatedDuck) => (
  (dispatch) => {
    axios.put(`/api/duck/update/${duckId}`, updatedDuck)
    .then(duck => dispatch({
      type: CONST.UPDATE_DUCK,
      payload: duck,
    }));
  }
);

export const deleteDuck = duckId => (
  (dispatch) => {
    axios.delete(`api/duck/${duckId}`)
    .then(deletedId => dispatch({
      type: CONST.DELETE_DUCK,
      payload: deletedId,
    }));
  }
);
