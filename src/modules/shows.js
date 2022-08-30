import makeAPICall from "./makeAPICall";

const generateShows = () => {
  let shows = [];
  const urls = ['https://api.tvmaze.com/shows/82', 'https://api.tvmaze.com/shows/169', 'https://api.tvmaze.com/shows/335', 'https://api.tvmaze.com/shows/179', 'https://api.tvmaze.com/shows/204', 'https://api.tvmaze.com/shows/30770', 'https://api.tvmaze.com/shows/527', 'https://api.tvmaze.com/shows/465', 'https://api.tvmaze.com/shows/36947', 'https://api.tvmaze.com/shows/73', 'https://api.tvmaze.com/shows/28276', 'https://api.tvmaze.com/shows/81', 'https://api.tvmaze.com/shows/41007', 'https://api.tvmaze.com/shows/29', 'https://api.tvmaze.com/shows/1371', 'https://api.tvmaze.com/shows/123', 'https://api.tvmaze.com/shows/347', 'https://api.tvmaze.com/shows/305', 'https://api.tvmaze.com/shows/55138', 'https://api.tvmaze.com/shows/1825', 'https://api.tvmaze.com/shows/175', 'https://api.tvmaze.com/shows/1369', 'https://api.tvmaze.com/shows/180', 'https://api.tvmaze.com/shows/431', 'https://api.tvmaze.com/shows/23470'];

  for (let i = 0; i < urls.length; i++) {
    makeAPICall(urls[i])
      .then((response) => shows.push(response));
  }

  return shows;
};

export default generateShows;
