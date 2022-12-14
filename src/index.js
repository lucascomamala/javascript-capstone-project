import './style.css';
import renderHome from './modules/home.js';
import renderNav from './modules/nav.js';
import generateShows from './modules/shows.js';
import generatePeople from './modules/people.js';

const createPage = async () => {
  const showsTemp = await generateShows();
  const people = await generatePeople();
  const shows = showsTemp.filter((show) => show.name.length < 15).slice(0, 25);
  const actors = people.filter((person) => person.gender === 'Male' && person.birthday !== null && person.image !== null).slice(0, 25);
  const actoras = people.filter((person) => person.gender === 'Female' && person.birthday !== null && person.image !== null).slice(0, 25);

  const showsSelected = shows.sort(() => 0.5 - Math.random()).slice(0, 9);
  const actorsSelected = actors.sort(() => 0.5 - Math.random()).slice(0, 9);
  const actorasSelected = actoras.sort(() => 0.5 - Math.random()).slice(0, 9);

  renderHome(showsSelected, actorsSelected, actorasSelected);
  renderNav();
};

createPage();
