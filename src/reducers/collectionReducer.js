import {
  RESET_COLLECTION,
  UPDATE_COLLECTION
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_COLLECTION:
      return INITIAL_STATE;
    case UPDATE_COLLECTION:
      return state.concat(action.payload);
    default:
      return state;
  }
};

