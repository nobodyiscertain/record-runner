import { UPDATE_HISTORY } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_HISTORY:
      return state.concat(action.payload)
    default:
      return state;
  }
}
