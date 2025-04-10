export class Movie {
  title;
  genre;
  duration;
  releaseDate;
  availableTickets;
  #rating; //private field

  constructor(
    title,
    genre,
    duration,
    availableTickets,
    releaseDate,
    rating = 0
  ) {
    this.title = title;
    this.genre = genre;
    this.duration = duration;
    this.availableTickets = availableTickets;
    this.releaseDate = new Date(releaseDate).toDateString();
    if (rating >= 0 && rating <= 10) {
      this.#rating = rating;
    }
  }

  //methods
  isAvailable() {
    if (this.releaseDate === new Date().toDateString()) {
      return true;
    } else {
      return false;
    }
  }

  getRating() {
    return this.#rating;
  }

  setRating(value) {
    if (value >= 0 && value <= 10) {
      this.#rating = value;
    } else {
      throw new Error("rating is out of range!");
    }
  }

  reduceTickets(quantity) {
    this.availableTickets -= quantity;
  }

  increaseTickets(quantity) {
    this.availableTickets += quantity;
  }
}
