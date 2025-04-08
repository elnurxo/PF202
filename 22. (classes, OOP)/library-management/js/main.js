import { Book } from "./classes/book.class.js";
import { Member } from "./classes/member.class.js";
import { Library } from "./classes/library.class.js";
import { Librarian } from "./classes/librarian.class.js";

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
const book2 = new Book("1984", "George Orwell", "Dystopian", 1949);
const book3 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "Classic",
  1925
);
const book4 = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "Classic",
  1951
);
const book5 = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", 1937);
const book6 = new Book("Pride and Prejudice", "Jane Austen", "Romance", 1813);
const book7 = new Book("Moby-Dick", "Herman Melville", "Adventure", 1851);
const book8 = new Book("War and Peace", "Leo Tolstoy", "Historical", 1869);
const book9 = new Book(
  "Crime and Punishment",
  "Fyodor Dostoevsky",
  "Philosophical",
  1866
);
const book10 = new Book(
  "Brave New World",
  "Aldous Huxley",
  "Science Fiction",
  1932
);

const books = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
];

const member1 = new Member("Elnur Khalilov");
const member2 = new Member("Eldar Pashazade");
const librarian = new Librarian("John Doe");

const library = new Library(books, [member1, member2], [librarian]);

console.log(library);

member1.borrowBook(1, library);
member1.borrowBook(4, library);
member1.returnBook(4, library);
member1.listBorrowedBooks();
