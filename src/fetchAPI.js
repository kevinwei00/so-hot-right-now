const PROXY = 'https://cors-anywhere.herokuapp.com/';
const ENDPOINT = 'http://api.indeed.com/ads/apisearch?';
const API_KEY = 'publisher=4013469286425094';
const PARAMS = 'v=2&limit=0&format=json';
const BASE_QUERY = 'q=title%3A%28developer+OR+engineer%29+'; // title:(developer OR engineer)

function fetchHandler(...args) {
  return fetch(...args)
    .then((response) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .catch((error) => console.error(error));
}

function composeQueryString(keywordsArray, useAnd) {
  //("a" OR "b" OR "c")
  // %22 = "
  // %28 = (
  // %29 = )
  const keywordsWithQuotes = keywordsArray.map((keyword) => `%22${encodeURIComponent(keyword)}%22`);
  const keywordsCombined = keywordsWithQuotes.join(useAnd ? '+AND+' : '+OR+');
  return `%28${keywordsCombined}%29`;
}

function composeURL(queryString) {
  return `${PROXY}${ENDPOINT}&${API_KEY}&${PARAMS}&${BASE_QUERY}${queryString}`;
}

function GetNumJobListingsFor(keywordsArray, useAnd = false) {
  const queryString = composeQueryString(keywordsArray, useAnd);
  return fetchHandler(composeURL(queryString)).then((responseData) => {
    return responseData ? responseData.totalResults : -1;
  });
}

export default {
  GetNumJobListingsFor,
};
