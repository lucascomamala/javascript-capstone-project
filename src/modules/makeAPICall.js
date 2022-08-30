const makeAPICall = async (requestURL) => {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const scoresText = await response.text();
  const result = await JSON.parse(scoresText);
  return result;
};

export default makeAPICall;
