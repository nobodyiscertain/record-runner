import { UPDATE_USER } from '../actions/types';

const INITIAL_STATE = {
  discogsUsername: '',
  lastfmUsername: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

