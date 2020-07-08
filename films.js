
const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
   
      while (personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
      }
   },
   rememberMyFilms: function() {
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
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
         alert('Просмотренно довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         alert('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
         alert('Вы киноман');
      } else {
         console.log('Произошла ошыбка');
      }   
   },
   toggleVisibleMyDB: function() {
      if(personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;      
      }
   },
   showMyDB: function(hidden) {
      if(!hidden) {
         console.log(personalMovieDB); 
      }
   },
   writeYourGenres: function() {
      for (let i = 1; i <= 3; i++) {
         const genre = prompt(`Ваш любимый жанр под номером ${i}`);

         if (genre === '' || genre === null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--; 
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }   

         personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`);
         });
      }
   }
   

};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres(); 

