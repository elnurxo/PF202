import { Member } from "./member.class.js";

export class Librarian extends Member {
  constructor(name) {
    super(name);
  }

  addBookToLibrary(book, library) {
    return library.addBook(book);
  }

  removeBookFromLibrary(bookId, library) {
    return library.removeBook(bookId);
  }
}
