let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

/* while (numberOfFilms === '' || numberOfFilms.length >= 50 ) {
   numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
}
 */
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


if (personalMovieDB.count < 10) {
   alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
   alert('Вы киноман');
} else {
   console.log('Произошла ошыбка');
}


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

console.log(personalMovieDB);
