export class Book {
  static id = 1;
  title;
  author;
  genre;
  publishedYear;
  isAvailable;

  constructor(title, author, genre, publishedYear, isAvailable = true) {
    this.id = Book.id++;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publishedYear = publishedYear;
    this.isAvailable = isAvailable;
  }

  markAsBorrowed() {
    this.isAvailable = false;
    return this;
  }
  markAsReturned() {
    this.isAvailable = true;
    return this;
  }
}
