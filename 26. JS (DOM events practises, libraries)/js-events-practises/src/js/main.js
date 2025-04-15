import { Movie } from "./classes/movie.class.js";
import { MovieList } from "./classes/movieList.class.js";
import { movies } from "./data/movies.js";
import Swal from "sweetalert2";

//helper function
function renderMovieCards(arr) {
  movieParentContainer.innerHTML = "";

  if (arr.length === 0) {
    // console.log(movieParentContainer);
    movieParentContainer.classList.remove([
      "lg:grid-cols-4",
      "grid-cols-1",
      "grid",
      "md:grid-cols-2",
    ]);
    movieParentContainer.innerHTML = `<h1 style="text-align:center !important;" class="w-full text-3xl text-bold text-red-500">No Movies Found with your search 🎥😔</h1>`;
  }

  arr.forEach((movie) => {
    movieParentContainer.innerHTML += `
          <div
              class="relative card overflow-hidden w-full h-auto transition shadow hover:shadow-2xl rounded-2xl bg-white">
              <img class="w-full h-64 object-cover rounded-t-2xl"
                src="${movie.poster}"
                alt="${movie.title}" title="${movie.title}">
  
              <div class="p-4">
                <h3 class="text-lg font-bold text-gray-800">${movie.title}</h3>
                <p class="text-gray-600">Genre: ${movie.genre}</p>
                <p class="text-gray-600">Release Year: ${movie.releaseYear}</p>
                <p class="text-gray-600">Director: ${movie.director}</p>
                <div class="flex items-center justify-between mt-2">
                  <span class="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full">IMDb: 8.5</span>
                  <button class="text-red-500 font-bold focus:outline-none">${
                    movie.isFavorite
                      ? `<i class="bg-red-600 fa-solid fa-heart"></i>`
                      : `<i class="border-red-600 fa-regular fa-heart"></i>`
                  }</button>
                </div>
              </div>
  
              <button
                data-id="${movie.id}"
                class="remove cursor-pointer w-full py-2 mt-4 bg-red-500 text-white font-bold rounded-b-2xl focus:outline-none">
                Remove
              </button>
            </div>
          `;
  });

  //remove
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const id = e.target.getAttribute("data-id");
          movieList.removeMovie(id);
          renderMovieCards(movieList.movies);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          renderGenreButtons();
        }
      });
    });
  });
}

//create movie list
const movieList = new MovieList(movies);

//initial render
const movieParentContainer = document.querySelector(".movies-parent");

document.addEventListener("DOMContentLoaded", function () {
  renderMovieCards(movieList.movies);
});

//search
const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function (e) {
  const searchedMovies = movieList.searchMovie(e.target.value);
  renderMovieCards(searchedMovies);
});

//sort by year
const sortYearSelect = document.querySelector("#yearSorter");

sortYearSelect.addEventListener("change", function (e) {
  const sortedMovies = movieList.sortByYear(e.target.value);
  renderMovieCards(sortedMovies);
});

//imdb filter
const ratingSelect = document.querySelector("#imdbFilter");

ratingSelect.addEventListener("change", function (e) {
  const filteredMovies = movieList.filterByRate(e.target.value);
  renderMovieCards(filteredMovies);
});

//filter by genres
const genreButtonParent = document.querySelector(".genre-buttons");
function renderGenreButtons() {
  const genresArr = movieList.giveAllGenres();
  genreButtonParent.innerHTML = "";
  genresArr.forEach((genre) => {
    genreButtonParent.innerHTML += `<button class="genre-btn px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300">${genre}</button>`;
  });

  const genreButtons = document.querySelectorAll(".genre-btn");
  genreButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const filteredMovies = movieList.filterByGenre(e.target.textContent);
      renderMovieCards(filteredMovies);
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  renderGenreButtons();
});

//add movie
const addForm = document.querySelector("#addMovieForm");

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const movieTitle = document.querySelector("#movieTitle").value;
  const movieGenre = document.querySelector("#movieGenre").value;
  const releaseYear = document.querySelector("#releaseYear").value;
  const director = document.querySelector("#director").value;
  const imdbRating = document.querySelector("#imdbRating").value;
  const poster = document.querySelector("#movieImage").value;

  const newMovie = new Movie(
    movieTitle,
    movieGenre,
    releaseYear,
    director,
    imdbRating,
    poster
  );
  movieList.addMovie(newMovie);
  renderMovieCards(movieList.movies);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "movie added successfully",
    showConfirmButton: false,
    timer: 1500,
  });
  const modal = document.querySelector(".modal");
  modal.classList.remove("open");
  renderGenreButtons();
});
