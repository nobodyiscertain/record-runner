import {
  RESET_COLLECTION,
  UPDATE_COLLECTION,
  UPDATE_USER
} from './types';
import { getUserCollection } from '../apis/discogs';

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload: payload
  }
};

export const updateCollection = (payload) => {
  return {
    type: UPDATE_COLLECTION,
    payload: payload
  }
};

export const resetCollection = () => {
  return {
    type: RESET_COLLECTION
  }
};

export const syncCollection = () => (dispatch, getState) => {
  const username = getState().user.discogsUsername;

  dispatch(resetCollection());

  getUserCollection(username)
    .then(res => {
      dispatch(updateCollection(res.collection));
    })
    .catch(res => console.log(res))
};
