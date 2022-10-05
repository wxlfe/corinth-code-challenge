let films = {};
let loadedPages = {};

const getFilmDetails = (filmUrl: string) => {
  if (!!films[filmUrl]) {
    return films[filmUrl];
  } else {
    films[filmUrl] = fetch(filmUrl).then((res) => res.json());
    return films[filmUrl];
  }
};

const getNewPage = (newPageUrl?: string) => {
  if (!!loadedPages[newPageUrl]) {
    return loadedPages[newPageUrl];
  } else {
    loadedPages[newPageUrl] = fetch(newPageUrl).then((res) => res.json());
    return loadedPages[newPageUrl];
  }
};

const searchPeople = (searchTerm?: string) => {
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

const getSpeciesDetails = (urls: string[]) => {
  let requests = urls.map((url) => fetch(url));
  const res = Promise.all(requests).then((responses) =>
    Promise.all(responses.map((r) => r.json()))
  );
  return res;
};

const getStarshipDetails = (urls: string[]) => {
  let requests = urls.map((url) => fetch(url));
  const res = Promise.all(requests).then((responses) =>
    Promise.all(responses.map((r) => r.json()))
  );
  return res;
};

export {
  getFilmDetails,
  getNewPage,
  searchPeople,
  getSpeciesDetails,
  getStarshipDetails,
};
