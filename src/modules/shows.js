import makeAPICall from './makeAPICall.js';

const generateShows = async () => {
  const url = 'https://api.tvmaze.com/shows';
  let x = await makeAPICall(url);
  return x.slice(0, 200);
};

export default generateShows;
