export class Quiz {
  questions;

  constructor(questions = []) {
    this.questions = questions;
  }

  //methods
  addNewQuestion(newQuestion) {
    this.questions.push(newQuestion);
  }
  removeQuestion(questionId) {
    const idx = this.questions.findIndex((x) => x.id == questionId);
    this.questions.splice(idx, 1);
  }
  searchQuestion(searchQuery) {
    return this.questions.filter((x) => {
      return x.title
        .toLowerCase()
        .trim()
        .includes(searchQuery.toLowerCase().trim());
    });
  }
  filterByLevel(level) {
    if (level == "all") {
      return this.questions;
    }
    return this.questions.filter((x) => {
      return x.level === level;
    });
  }
}
