import _ from 'lodash';
import {
  PICK_CURRENT,
  UPDATE_CURRENT,
  RESET_COLLECTION,
  UPDATE_COLLECTION,
  UPDATE_HISTORY,
  UPDATE_USER
} from './types';
import { getUserCollection } from '../apis/discogs';
import * as audiodb from '../apis/audiodb';
import * as lastfm from '../apis/lastfm';

export const pickCurrent = () => (dispatch, getState) => {
  const collection = getState().collection;
  let currentRecord = _.sample(collection);
  const artist = currentRecord.basic_information.artists.map(a => a.name).join(',');
  const albumName = currentRecord.basic_information.title;
  const getLastfmData = lastfm.getAlbumData;
  const getAudiodbData = audiodb.getAlbumData;

  return Promise.all([getLastfmData(artist, albumName), getAudiodbData(artist, albumName)])
    .then((responses) => {
      const [lastfmRes, audiodbRes] = responses;
      currentRecord = {
        ...currentRecord,
        audiodb: audiodbRes.data,
        lastfm: lastfmRes.data
      };
      dispatch(updateCurrent(currentRecord));
      dispatch(updateHistory(currentRecord));
    })
    .catch(res => console.log(res));
};

export const updateCurrent = (payload) => {
  return {
    type: UPDATE_CURRENT,
    payload: payload
  }
};

export const updateHistory = (payload) => {
  return {
    type: UPDATE_HISTORY,
    payload: payload
  }
};

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

  return getUserCollection(username)
    .then(res => {
      dispatch(updateCollection(res.collection));
    })
    .catch(res => console.log(res))
};
