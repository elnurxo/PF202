export class Library {
  books = [];
  members = [];
  librarians = [];

  constructor(books, members, librarians) {
    this.books = books;
    this.members = members;
    this.librarians = librarians;
  }

  //methods
  addBook(book) {
    this.books.push(book);
    return this.books;
  }

  removeBook(bookId) {
    const idx = this.books.findIndex((book) => book.id == bookId);
    this.books.splice(idx, 1);
    return {
      books: this.books,
      message: "book removed from library successfully!",
    };
  }

  filterBooksByGenre(genre) {
    const filteredBooks = this.books.filter((book) => {
      return book.genre.toLowerCase().trim() === genre.toLowerCase().trim();
    });
    return filteredBooks;
  }

  getBookDetails(bookId) {
    const book = this.books.find((x) => x.id == bookId);
    console.log(
      `${book.title} was written by ${book.author} and was published in ${book.publishedYear}`
    );
  }

  listAllBooks() {
    this.books.forEach((book) => {
      this.getBookDetails(book.id);
    });
  }
}
