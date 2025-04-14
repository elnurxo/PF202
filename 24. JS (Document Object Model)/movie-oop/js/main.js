import { Admin } from "./classes/admin.class.js";
import { Client } from "./classes/client.class.js";
import { Movie } from "./classes/movie.class.js";
import { Theatre } from "./classes/theatre.class.js";


//create movies
const interstellar = new Movie("Interstellar", "Sci-Fi", 129, 10, "04-10-2025");
const harryPotter = new Movie("Harry Potter", "Fantasy", 140, 20, "04-10-2024");
const darkKnight = new Movie(
  "The Dark Knight",
  "Super-hero",
  90,
  3,
  "12-12-2017"
);

const elnurxo = new Client("Elnur Khalilov", 21);
const admin = new Admin("Hezret Kazimzade", 19);

const parkCinema = new Theatre("Park Cinema", "Park Bulvar", [
  interstellar,
  harryPotter,
]);

// admin.addMovieToTheatre(parkCinema, darkKnight);
// admin.removeMovieFromTheatre(parkCinema, "Interstellar");
// console.log(parkCinema);

elnurxo.buyTicket(interstellar, 2);
elnurxo.listTickets();

parkCinema.showAllMovies();
