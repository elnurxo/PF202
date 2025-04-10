export class Client {
  name;
  age;
  tickets;

  constructor(name, age, tickets = []) {
    this.name = name;
    this.age = age;
    this.tickets = tickets;
  }

  //methods
  buyTicket(movie, quantity) {
    if (movie.availableTickets >= quantity) {
      if (movie.isAvailable()) {
        this.tickets.push({
          title: movie.title,
          quantity: quantity,
        });
        movie.reduceTickets(quantity);
        console.log(`${quantity} tickets bought for ${movie.title}`);
      } else {
        console.log(`${movie.title} is not currently available | ${movie.releaseDate}`);
      }
    } else {
      console.log("not enough tickets in theatre");
    }
  }

  listTickets() {
    console.log(this.tickets);
    return this.tickets;
  }
}
