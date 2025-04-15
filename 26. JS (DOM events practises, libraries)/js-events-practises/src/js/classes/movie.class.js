export class Movie {
  id;
  title;
  genre;
  releaseYear;
  director;
  imdbRate;
  poster;
  isFavorite;
  createdAt;

  constructor(title, genre, releaseYear, director, imdbRate, poster) {
    this.id = new Date().getTime();
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.director = director;
    this.imdbRate = imdbRate;
    this.isFavorite = false;
    this.poster = poster;
    this.createdAt = new Date().toLocaleDateString();
  }

  //methods
  makeFavorite() {
    this.isFavorite = true;
  }
  removeFavorite() {
    this.isFavorite = false;
  }
}
