import config from './config';

function GetAllCategories() {
  return fetch(`${config.API_ENDPOINT}/categories`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${config.API_KEY}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then((responseData) => responseData)
    .catch((error) => console.error(error));
}

function GetAllToolsForCategory(category_id) {
  return fetch(`${config.API_ENDPOINT}/categories/${category_id}/tools`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${config.API_KEY}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then((responseData) => responseData)
    .catch((error) => console.error(error));
}

function GetNumJobListings(keywordsArray, useAnd = false) {
  const keywords = keywordsArray.join(',');
  return fetch(`${config.API_ENDPOINT}/search?useAnd=${useAnd}&keywords=${keywords}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${config.API_KEY}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then((responseData) => responseData)
    .catch((error) => console.error(error));
}

export default {
  GetAllCategories,
  GetAllToolsForCategory,
  GetNumJobListings,
};
