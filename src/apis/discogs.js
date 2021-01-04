import axios from 'axios';
import _ from 'lodash';

const client = axios.create({
  baseURL: 'https://api.discogs.com/'
});

export const getUserProfile = (username) => {
  return client.get(`users/${username}`);
};

export const getUserCollection = (username) => {
  let collection = [];

  return new Promise((resolve, reject) => {
    getUserCollectionPage(username, 1)
      .then((res) => {
        const { data } = res;
        const pageCount = data.pagination.pages;
        const pageFunc = [];

        _.times(pageCount, (n) => {
          if (n === 0) return;
          pageFunc.push(getUserCollectionPage(username, n + 1))
        });

        Promise.all(pageFunc)
          .then(results => {
            _.each(results, (result) => {
              console.log(collection, result.data.releases);
              collection = _.concat(collection, result.data.releases)
            });
          })
          .then(() => resolve({ collection }));
      });
  });
};

export const getUserCollectionPage = (username, page) => {
  return client.get(`users/${username}/collection/folders/0/releases`, {
    params: {
      per_page: 100,
      page: page
    }
  });
};

export default client;
