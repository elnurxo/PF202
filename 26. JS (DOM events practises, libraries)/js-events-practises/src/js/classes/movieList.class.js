export class MovieList {
  movies = [];

  constructor(movies = []) {
    this.movies = movies;
  }

  //methods
  addMovie(newMovie) {
    this.movies.push(newMovie);
  }

  removeMovie(movieId) {
    const idx = this.movies.findIndex((x) => x.id == movieId);
    return this.movies.splice(idx, 1);
  }

  searchMovie(query) {
    const searchedMovies = this.movies.filter((movie) => {
      return (
        movie.title.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
        movie.genre.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
        movie.director.toLowerCase().trim().includes(query.toLowerCase().trim())
      );
    });

    return searchedMovies;
  }

  sortByYear(sorter) {
    if (sorter === "new-to-old") {
      return this.movies.toSorted((movie1, movie2) => {
        return movie2.releaseYear - movie1.releaseYear;
      });
    } else if (sorter === "old-to-new") {
      return this.movies.toSorted((movie1, movie2) => {
        return movie1.releaseYear - movie2.releaseYear;
      });
    }
    return this.movies;
  }

  filterByRate(rate) {
    const rates = rate.split("-");
    if (rates.length == 1) {
      return this.movies;
    }
    const minRate = +rates[0];
    const maxRate = +rates[1];

    return this.movies.filter((movie) => {
      return movie.imdbRate >= minRate && movie.imdbRate <= maxRate;
    });
  }

  filterByGenre(genre) {
    if (genre === "All Genres") {
      return this.movies;
    }
    return this.movies.filter((movie) => {
      return movie.genre.toLowerCase() === genre.toLowerCase();
    });
  }

  giveAllGenres() {
    const genresArr = this.movies.map((movie) => movie.genre);
    const uniqueGenres = [...new Set(genresArr)];
    return uniqueGenres;
  }
}
