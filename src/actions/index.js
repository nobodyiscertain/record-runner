import {
  UPDATE_USER
} from './types';

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload: payload
  }
};
