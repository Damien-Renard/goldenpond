import axios from 'axios';

import * as CONST from '../constants';

export const fetchPonds = () => (
  (dispatch) => {
    axios.get('/api/pond')
    .then(ponds => dispatch({
      type: CONST.FETCH_PONDS,
      payload: ponds,
    }));
  }
);

export const fetchOnePond = pondId => (
  (dispatch) => {
    axios.get(`/api/pond/${pondId}`)
    .then(currentPond => dispatch({
      type: CONST.FETCH_ONE_POND,
      payload: currentPond,
    }));
  }
);

export const savePond = pond => (
  (dispatch) => {
    axios.post('/api/pond', pond)
    .then(savedPond => dispatch({
      type: CONST.SAVE_POND,
      payload: savedPond,
    }));
  }
);

export const deletePond = pondId => (
  (dispatch) => {
    axios.delete(`api/pond/${pondId}`)
    .then(deletedId => dispatch({
      type: CONST.DELETE_POND,
      payload: deletedId,
    }));
  }
);
