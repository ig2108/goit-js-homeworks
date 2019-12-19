'use strict';

const baseUrl = 'https://restcountries.eu/rest/v2';
const resourse = '/name';

export default {
  fetchCountry(query) {
    const queryString = `/${query}`;
    return fetch(baseUrl + resourse + queryString).then(response =>
      response.json(),
    );
  },
};
