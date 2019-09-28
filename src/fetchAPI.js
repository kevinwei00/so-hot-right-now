const ENDPOINT = 'https://serene-beach-65298.herokuapp.com';
// const ENDPOINT = 'http://localhost:8000/';
const API_KEY = process.env.REACT_APP_API_KEY;

function MakeRequest(keywordsArray, useAnd = false) {
  return fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      keywordsArray,
      useAnd,
    }),
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
  MakeRequest,
};
