import { UPDATE_CURRENT } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_CURRENT:
      return action.payload;
    default:
      return state;
  }
}
