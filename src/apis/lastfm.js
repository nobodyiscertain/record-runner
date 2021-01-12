import axios from 'axios';
import _ from 'lodash';

const client = axios.create({
  baseURL: 'https://ws.audioscrobbler.com/2.0/'
});

export const getAlbumData = (artist, albumName) => {
  return client.get('', {
    params: {
      method: 'album.getInfo',
      format: 'json',
      api_key: process.env.REACT_APP_LASTFM_API_KEY,
      autocorrect: 1,
      artist: artist,
      album: albumName,
    }
  });
};

export default client;
