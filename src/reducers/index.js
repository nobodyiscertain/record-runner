import { combineReducers } from 'redux';
import { UPDATE_USER } from '../actions/types';

const userInitialState = {
  discogsUsername: '',
  lastfmUsername: ''
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer
});

