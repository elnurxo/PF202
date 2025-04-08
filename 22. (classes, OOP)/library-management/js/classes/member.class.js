export class Member {
  static id = 1;
  name;
  borrowedBooks;

  constructor(name) {
    this.id = Member.id++;
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(bookId, library) {
    const book = library.books.find((x) => x.id == bookId);

    if (book) {
      if (book.isAvailable) {
        this.borrowedBooks.push(book);
        book.markAsBorrowed();
        window.alert("book is borrowed!");
      } else {
        window.alert("book is not available!");
      }
    } else {
      window.alert("book is not found!");
    }
  }

  returnBook(bookId, library) {
    const book = library.books.find((x) => x.id == bookId);
    if (book) {
      const didIGet = this.borrowedBooks.find((x) => x.id == book.id);
      if (didIGet) {
        didIGet.markAsReturned();
        const idx = this.borrowedBooks.findIndex((x) => x.id == book.id);
        this.borrowedBooks.splice(idx, 1);
        window.alert("book has returned!");
      } else {
        window.alert("you did not get this book!");
      }
    } else {
      window.alert("book is not found!");
    }
  }

  listBorrowedBooks() {
    if (this.borrowedBooks.length == 0) {
      console.log("you have not take a book!");
    }
    this.borrowedBooks.forEach((book) => {
      console.log(
        `${book.title} was written by ${book.author} is taken by you!`
      );
    });
  }
}
