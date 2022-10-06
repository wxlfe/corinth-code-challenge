import { Film, SearchResults, Species, Starship } from '../interfaces';

let films = {};
let loadedPages = {};

const getFilmDetails = (filmUrl: string): Promise<Film> => {
  if (!!films[filmUrl]) {
    return films[filmUrl];
  } else {
    films[filmUrl] = fetch(filmUrl).then((res) => res.json());
    return films[filmUrl];
  }
};

const getNewPage = (newPageUrl?: string): Promise<SearchResults> => {
  if (!!loadedPages[newPageUrl]) {
    return loadedPages[newPageUrl];
  } else {
    loadedPages[newPageUrl] = fetch(newPageUrl).then((res) => res.json());
    return loadedPages[newPageUrl];
  }
};

const getSpeciesDetails = (urls: string[]): Promise<Species[]> => {
  let requests = urls.map((url) => fetch(url));
  const res = Promise.all(requests).then((responses) =>
    Promise.all(responses.map((r) => r.json()))
  );
  return res;
};

const getStarshipDetails = (urls: string[]): Promise<Starship[]> => {
  let requests = urls.map((url) => fetch(url));
  const res = Promise.all(requests).then((responses) =>
    Promise.all(responses.map((r) => r.json()))
  );
  return res;
};

const searchPeople = (searchTerm?: string): Promise<SearchResults> => {
  if (searchTerm === '') {
    if (!!loadedPages['https://swapi.dev/api/people/?page=1']) {
      return loadedPages['https://swapi.dev/api/people/?page=1'];
    } else {
      loadedPages['https://swapi.dev/api/people/?page=1'] = fetch(
        'https://swapi.dev/api/people'
      ).then((res) => res.json());
      return loadedPages['https://swapi.dev/api/people/?page=1'];
    }
  } else {
    return fetch(`https://swapi.dev/api/people/?search=${searchTerm}`).then(
      (res) => res.json()
    );
  }
};

export {
  getFilmDetails,
  getNewPage,
  getSpeciesDetails,
  getStarshipDetails,
  searchPeople,
};
