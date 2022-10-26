// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => {
    return movies.map((movie) => movie.director);
  };

 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (array) => {
    return array.filter((movie) => {
      const isDirectedByStevenSpielberg = movie.director === 'Steven Spielberg';
      const isDramaMovie = movie.genre.includes('Drama');
      return isDirectedByStevenSpielberg && isDramaMovie;
    }).length;
  };

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const roundNumbers = (number, digits) =>
  Math.round(number * 10 ** digits) / 10 ** digits;

const scoresAverage = (array) => {
  if (array.length === 0) {
    return 0;
  }
  const scores = array
    .map((movie) => movie.score)
    // .filter(score => typeof score === 'number');
    .map((score) => {
      if (typeof score === 'number') {
        return score;
      } else {
        return 0;
      }
    });
  const sumOfAllScores = scores.reduce(
    (accumulator, score) => accumulator + score,
    0
  );
  const averageScore = sumOfAllScores / scores.length;
  /*
  const averageScore = scores.reduce((accumulator, score) => accumulator + score / scores.length, 0);
  */
  return roundNumbers(averageScore, 2);
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (array) => {
    const dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));
    const averageDramaMovieScore = scoresAverage(dramaMovies);
    return averageDramaMovieScore;
  };

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {
    const sortedMovies = [...array];
    // const sortedMovies = array.slice();
    sortedMovies.sort((firstMovie, secondMovie) => {
      const firstMovieYearOfRelease = firstMovie.year;
      const secondMovieYearOfRelease = secondMovie.year;
  
      if (firstMovieYearOfRelease > secondMovieYearOfRelease) {
        return 1;
      } else if (firstMovieYearOfRelease < secondMovieYearOfRelease) {
        return -1;
      } else if (
        firstMovie.title.toLowerCase() > secondMovie.title.toLowerCase()
      ) {
        return 1;
      } else {
        return -1;
      }
    });
  
    return sortedMovies;
  };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {
    const sortedMovies = [...array];
    sortedMovies.sort((firstMovie, secondMovie) => {
      return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = sortedMovies.map((movie) => movie.title);
    return movieTitles.slice(0, 20);
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
