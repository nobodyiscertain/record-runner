import axios from 'axios';
import _ from 'lodash';

const client = axios.create({
  baseURL: 'https://theaudiodb.com/api/v1/json/1/'
});

export const getAlbumData = (artist, albumName) => {
  return client.get('searchalbum.php', {
    params: {
      s: artist,
      a: albumName,
    }
  });
};

export default client;
