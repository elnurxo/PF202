// task 1 - Cat
const cat = {
  name: "Garfield",
  age: 4,
  color: "orange",
  isFluffy: true,
  favoriteFoods: ["lasagna", "meat"],
};
Object.seal(cat); //seal
cat.breed = "Italian";
cat.name = "Simba";

const catWithMethods = {
  name: "Simba",
  favoriteFoods: ["mouse"],
  meow() {
    console.log(`Meow! My name is ${this.name}`);
  },
  addFavorite: function (food) {
    this.favoriteFoods.push(food);
    return this.favoriteFoods;
  },
};

// catWithMethods.meow();
// console.log(catWithMethods.addFavorite("lion"));

//task 2 - Product
const product = {
  name: "IPhone",
  costPrice: 500,
  sellPrice: 1500,
  category: "electronics",
  stock: 15,
  findProfit() {
    return this.sellPrice - this.costPrice;
  },
  isAvailable() {
    if (this.stock > 0) {
      return true;
    } else {
      return false;
    }
  },
  discount(percent) {
    this.sellPrice = this.sellPrice - (this.sellPrice * percent) / 100;
    return this;
  },
};

// console.log(product);
// console.log(product.findProfit());
// console.log(product.isAvailable());
// console.log(product.discount(10));

//task 3 - user
const user = {
  username: "admin123",
  email: "admin@gmail.com",
  isAdmin: false,
  lastLogin: "02-12-2024 14:40",
  settings: {
    theme: "dark",
    language: "az",
  },
  changeEmail: function (newEmail) {
    if (this.isAdmin) {
      this.email = newEmail;
      return this;
    } else {
      window.alert("you are not admin!");
      return false;
    }
  },
};

// console.log(user.changeEmail("admin123@hotbox.ru"));
// console.log(Object.keys(user)); // []
// console.log(Object.values(user));
// console.log(Object.entries(user));

//task 4 - Movies array
const movies = [
  {
    title: "Ze Shawshank Redemption",
    year: 1994,
    imdb: 9.3,
    genre: "Drama",
    duration: 142,
    director: "F. Darabont",
    country: "USA",
    isWatched: true,
  },
  {
    title: "The Godfather",
    year: 1972,
    imdb: 9.2,
    genre: "Crime",
    duration: 175,
    director: "F.F. Coppola",
    country: "USA",
    isWatched: false,
  },
  {
    title: "A Pulp Fiction",
    year: 1994,
    imdb: 8.9,
    genre: "Crime",
    duration: 154,
    director: "Q. Tarantino",
    country: "USA",
    isWatched: true,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    imdb: 9.0,
    genre: "Action",
    duration: 152,
    director: "C. Nolan",
    country: "USA",
    isWatched: true,
  },
  {
    title: "Schindler's List",
    year: 1993,
    imdb: 9.0,
    genre: "Biography",
    duration: 195,
    director: "S. Spielberg",
    country: "USA",
    isWatched: false,
  },
];

//movies - 1.1
const sortByIMDB = function (arr) {
  return arr.toSorted((a, b) => {
    return b.imdb - a.imdb;
  });
};

// console.log(sortByIMDB(movies));

//movies - 1.2
const sortByTitle = function (arr) {
  return arr.toSorted((a, b) => {
    return a.title.localeCompare(b.title);
  });
};

// console.log(sortByTitle(movies));

//movies - 1.3
const filterByIMDB = function (arr, imdb) {
  return arr.filter((movie) => {
    return movie.imdb > imdb;
  });
};

// console.log(filterByIMDB(movies, 9.5));

//movies - 1.4
const filterByYear = function (arr, minYear, maxYear) {
  return arr.filter((movie) => {
    return movie.year >= minYear && movie.year <= maxYear;
  });
};

// console.log(filterByYear(movies, 2010, 2025));

//movies - 1.5
const findByGenre = function (arr, genre) {
  return arr.find((movie) => {
    return movie.genre.toLowerCase().trim() === genre.toLowerCase().trim();
  });
};

// console.log(findByGenre(movies, "Drama"));

//movies - 1.6
// const inputTitle = window.prompt("enter movie title: ");
// const inputIMDB = Number(window.prompt("enter movie imdb: "));

// movies.push({title: inputTitle, imdb: inputIMDB});
// console.log(movies);

// const title = window.prompt("search for movie...");

// const searchedMovies = movies.filter((movie) => {
//   return movie.title.includes(title);
// });

// console.log(searchedMovies);

const students = [
  {
    name: "Ali",
    age: 17,
    score: 89,
  },
  {
    name: "Hussein",
    age: 19,
    score: 96,
  },
  {
    name: "Omar",
    age: 16,
    score: 67,
  },
  {
    name: "John",
    age: 19,
    score: 99,
  },
];

const increaseStudentScores = function (arr, newScore) {
  const newArr = arr.map((student) => {
    if (student.score + newScore > 100) {
      student.score = 100;
    } else {
      student.score += newScore;
    }
    return student;
  });
  return newArr;
};

// console.log(increaseStudentScores(students, 5));
