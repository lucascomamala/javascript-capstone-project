import makeAPICall from './makeAPICall.js';

const generateActors = () => {
  const actors = [];
  const urls = ['https://api.tvmaze.com/people/14072', 'https://api.tvmaze.com/people/14245', 'https://api.tvmaze.com/people/40682', 'https://api.tvmaze.com/people/9696', 'https://api.tvmaze.com/people/412', 'https://api.tvmaze.com/people/23455', 'https://api.tvmaze.com/people/48973', 'https://api.tvmaze.com/people/888', 'https://api.tvmaze.com/people/22757', 'https://api.tvmaze.com/people/5068', 'https://api.tvmaze.com/people/40099', 'https://api.tvmaze.com/people/12225', 'https://api.tvmaze.com/people/102849', 'https://api.tvmaze.com/people/27454', 'https://api.tvmaze.com/people/19376', 'https://api.tvmaze.com/people/38980', 'https://api.tvmaze.com/people/24517', 'https://api.tvmaze.com/people/30249', 'https://api.tvmaze.com/people/33905', 'https://api.tvmaze.com/people/25577', 'https://api.tvmaze.com/people/30745', 'https://api.tvmaze.com/people/1123', 'https://api.tvmaze.com/people/673', 'https://api.tvmaze.com/people/53639', 'https://api.tvmaze.com/people/50296'];

  for (let i = 0; i < urls.length; i += 1) {
    makeAPICall(urls[i])
      .then((response) => actors.push(response));
  }

  return actors;
};

export default generateActors;
