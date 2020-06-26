let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?','');
let evaluationFilm = prompt('На сколько оцените его?','');
let a = prompt('Один из последних просмотренных фильмов?','');
let b = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastFilm] = evaluationFilm;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);