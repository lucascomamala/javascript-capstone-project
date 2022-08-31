const makeAPICall = async (requestURL) => {
  const result = fetch(requestURL)
    .then(response => response.json())
    .then(json => json);
  return result;
};

export default makeAPICall;
