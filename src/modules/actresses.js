import makeAPICall from "./makeAPICall";

const generateActresses = () => {
  let actresses = [];
  const urls = ['https://api.tvmaze.com/people/14080', 'https://api.tvmaze.com/people/31024', 'https://api.tvmaze.com/people/20082', 'https://api.tvmaze.com/people/2792', 'https://api.tvmaze.com/people/68900', 'https://api.tvmaze.com/people/6446', 'https://api.tvmaze.com/people/129611', 'https://api.tvmaze.com/people/10261', 'https://api.tvmaze.com/people/208733', 'https://api.tvmaze.com/people/12227', 'https://api.tvmaze.com/people/6231', 'https://api.tvmaze.com/people/32312', 'https://api.tvmaze.com/people/9491', 'https://api.tvmaze.com/people/6079', 'https://api.tvmaze.com/people/30508', 'https://api.tvmaze.com/people/26407', 'https://api.tvmaze.com/people/14723', 'https://api.tvmaze.com/people/26411', 'https://api.tvmaze.com/people/70311', 'https://api.tvmaze.com/people/27333', 'https://api.tvmaze.com/people/27332', 'https://api.tvmaze.com/people/28102', 'https://api.tvmaze.com/people/881', 'https://api.tvmaze.com/people/890', 'https://api.tvmaze.com/people/59777'];

  for (let i = 0; i < urls.length; i++) {
    makeAPICall(urls[i])
      .then((response) => actresses.push(response));
  }

  return actresses;
};

export default generateActresses;
