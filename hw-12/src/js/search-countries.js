import searchCountries from './fetch-countries';
import countriesTemplate from '../templates/countries-list.hbs';
import countryTemplate from '../templates/country-item.hbs';
import refs from './refs';
import debounce from 'lodash.debounce';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify';

refs.inputQuery.addEventListener('input', debounce(inputSearchQuery, 1000));

function inputSearchQuery(e) {
  const searchQuery = e.target.value;
  clearCountriesMarkup();

  searchCountries
    .fetchCountry(searchQuery)
    .then(arr => {
      const markup = countryCount(arr);
      insertCountries(markup);
      if (arr.status === 404 || arr.length > 10) {
        refs.searchedCountries.textContent = '';
      }
    })
    .catch(error => {
      console.warn(error);
    });
}

function countryCount(arr) {
  if (arr.length > 10) {
    PNotify.alert('Please enter more specific query!');
  } else if (arr.length > 1 && arr.length < 11) {
    const markup = buildCountriesListMarkup(arr);
    return markup;
  } else if (arr.length === 1) {
    const markup = buildCountryItemMarkup(arr);
    return markup;
  } else {
    clearCountriesMarkup();
  }
}

function insertCountries(markup) {
  refs.searchedCountries.insertAdjacentHTML('beforeend', markup);
}

function buildCountriesListMarkup(items) {
  return countriesTemplate(items);
}

function buildCountryItemMarkup(arr) {
  const obj = arr[0];
  return countryTemplate(obj);
}

function clearCountriesMarkup() {
  refs.searchedCountries.innerHTML = '';
}
