import makeAPICall from './makeAPICall.js';

const generatePeople = async () => {
  const url = 'https://api.tvmaze.com/people';
  const x = await makeAPICall(url);
  return x.slice(0, 200);
};

export default generatePeople;
