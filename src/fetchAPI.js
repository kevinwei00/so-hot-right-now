const BASE_URL =
  'http://api.indeed.com/ads/apisearch?publisher=4013469286425094&v=2&limit=0&format=json&q=title%3A%28developer+OR+engineer%29+';

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

function composeQueryString(inputArray) {
  //("a" OR "b" OR "c")
  return inputArray.join('+');
}

function GetNumJobListingsFor(inputArray) {
  const queryString = composeQueryString(inputArray);
  return fetchHandler(`${BASE_URL}${queryString}`).then((responseData) =>
    responseData
  );
}

export default {
  GetNumJobListingsFor,
};
