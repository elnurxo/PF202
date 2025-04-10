import { Client } from "./client.class.js";

export class Admin extends Client {
  constructor(name, age, tickets = []) {
    super(name, age, tickets);
  }

  //methods
  addMovieToTheatre(theatre, movie) {
    theatre.addMovie(movie);
  }

  removeMovieFromTheatre(theatre, title) {
    theatre.removeMovie(title);
  }
}
