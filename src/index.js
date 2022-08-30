import './style.css';
import generateShows from './modules/shows.js';
import generateActors from './modules/actors.js';
import generateActresses from './modules/actresses.js';
import renderNav from './modules/nav.js';

const shows = generateShows();
const actors = generateActors();
const actresses = generateActresses();

renderNav();
addNavListeners();

console.log('x: ', shows);
console.log('y: ', actors);
console.log('z: ', actresses);

document.getElementById('app').innerHTML = 'shows';
