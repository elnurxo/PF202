import moment from "moment";

export class Question {
  id;
  level;
  title;
  description;
  createdAt;

  constructor(title, description, level = "easy") {
    this.id = new Date().getTime();
    this.title = title;
    this.description = description;
    this.level = level;
    this.createdAt = moment(new Date()).format("MMMM Do YYYY, h:mm a");
  }

  //methods
  showInfo() {
    console.log(`title: ${this.title} | level: ${this.level}`);
  }
}
