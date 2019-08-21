import fetch from 'node-fetch';
const API_URL = 'https://yts.lt/api/v2/list_movies.json?';

export const getMovie = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0 && limit < 50) {
    REQUEST_URL += `limit=${limit}`;
  }

  if (rating > 0 && rating < 9) {
    REQUEST_URL += `${limit > 0 ? '&' : ''}minimum_rating=${rating}`
  }

  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};
