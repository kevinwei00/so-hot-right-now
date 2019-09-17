const BASE_URL =
  'https://api.indeed.com/ads/apisearch?publisher=4013469286425094&v=2&limit=0&format=json&q=title%3A%28developer+OR+engineer%29+';

function fetchHandler(...args) {
  return fetch(...args)
    .then((response) => {
      if (!response.ok) {
        console.log('response', response)
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .catch((error) => console.error(error));
}

function composeQueryString(inputArray) {
  return inputArray.join('+');
}

function GetNumJobListingsFor(inputArray) {
  const queryString = composeQueryString(inputArray);
  const jobListings = fetchHandler(`${BASE_URL}${queryString}`, {
    method: 'GET',
  }).then((responseData) => {
    //console.log('responseData', responseData)
    //console.log('responseData.totalResults', responseData.totalResults);
    return responseData.totalResults;
  });
  return jobListings;
}

export default {
  GetNumJobListingsFor,
};
