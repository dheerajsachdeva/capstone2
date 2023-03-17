import './style.css';
import displayShow from './modules/home.js';
import Movie from './asset/movie.jpg';

const logo = document.getElementById('logo');
logo.src = Movie;

displayShow();
