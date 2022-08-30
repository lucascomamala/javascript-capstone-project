import './style.css';
import generateShows from './modules/shows.js';
import generateActors from './modules/actors.js';
import generateActresses from './modules/actresses.js';

const shows = generateShows();
const actors = generateActors();
const actresses = generateActresses();

console.log('x: ', shows);
console.log('y: ', actors);
console.log('z: ', actresses);
