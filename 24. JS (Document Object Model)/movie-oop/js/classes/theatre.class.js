export class Theatre {
  name;
  location;
  movies;

  constructor(name, location, movies = []) {
    this.name = name;
    this.location = location;
    this.movies = movies;
  }

  //methods
  addMovie(movie) {
    this.movies.push(movie);
    console.log(`${movie.title} added to ${this.name}`);
    return this.movies;
  }

  removeMovie(title) {
    const idx = this.movies.findIndex((x) => x.title === title);
    this.movies.splice(idx, 1);
    console.log(`movie removed from theatre`);
    return this.movies;
  }

  getMoviesByGenre(genre) {
    const filteredMovies = this.movies.filter((x) => x.genre === genre);
    console.log(filteredMovies);
    return filteredMovies;
  }

  showAllMovies() {
    console.log(this.movies);
    return this.movies;
  }
}
