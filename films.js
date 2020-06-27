let numberOfFilms;

function start() {
   numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      let lastFilm = prompt('Один из последних просмотренных фильмов?');
      let evaluationFilm = prompt('На сколько оцените его?');
   
   
      if (lastFilm != null && evaluationFilm != null && lastFilm != '' && evaluationFilm != '' && lastFilm.length < 50) {
         personalMovieDB.movies[lastFilm] = evaluationFilm;
         console.log('done');
      } else {
         i--;
         console.log('error');
      }
    
   }
}

/* rememberMyFilms(); */

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert('Просмотренно довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
   } else {
      console.log('Произошла ошыбка');
   }   
}

/* detectPersonalLevel(); */

function showMyDB(hidden){
   if(!hidden) {
      console.log(personalMovieDB); 
   }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

writeYourGenres();

