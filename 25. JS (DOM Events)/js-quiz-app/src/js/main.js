import { Quiz } from "./classes/quiz.class.js";
import { Question } from "./classes/question.class.js";
import Swal from "sweetalert2";

//add new quiz button
const addNewQuizBtn = document.querySelector("#add-modal");
const addForm = document.querySelector("form#add");
addNewQuizBtn.addEventListener("click", function () {
  addForm.classList.toggle("hidden");
  if (!addForm.classList.contains("hidden")) {
    this.textContent = "hide form!";
  } else {
    this.textContent = "add new quiz";
  }
});

//document load
const quizApp = new Quiz();

//helper functions
function resetForm(titleInp, descriptionInput, levelOption) {
  titleInp.value = "";
  descriptionInput.value = "";
  levelOption.value = "easy";
}

function renderQuizList(arr) {
  const quizWrapper = document.querySelector(".quiz-wrapper");
  quizWrapper.innerHTML = "";
  arr.forEach((question) => {
    quizWrapper.innerHTML += `
         <div class="bg-white shadow-md rounded-lg border border-gray-300  p-4">
            <div class="flex justify-between items-center">
              <span class="text-xs font-bold uppercase px-2 py-1 rounded ${
                question.level == "easy"
                  ? "bg-green-200"
                  : question.level === "medium"
                  ? "bg-yellow-500"
                  : question.level === "hard"
                  ? "bg-red-500"
                  : ""
              } text-black-800">${question.level}</span>
            </div>
            <h3 class="mt-2 text-lg font-semibold text-gray-800">${
              question.title
            }</h3>
            <ul class="mt-2 space-y-1 text-gray-600">
              <li>${question.description}</li>
            </ul>
            <button
              class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Show Answer
            </button>
          </div>
        `;
  });
}

//add new quiz
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.querySelector("form #title");
  const descriptionInput = document.querySelector("form #description");
  const levelOption = document.querySelector("form #level");
  if (
    titleInput.value === "" ||
    descriptionInput.value == "" ||
    levelOption.value == ""
  ) {
    alert("fields are not completed");
  } else {
    const newQuestion = new Question(
      titleInput.value,
      descriptionInput.value,
      levelOption.value
    );
    quizApp.addNewQuestion(newQuestion);
    resetForm(titleInput, descriptionInput, levelOption);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "New Question added to Quiz List",
      showConfirmButton: false,
      timer: 1500,
    });
    this.classList.add("hidden");
    renderQuizList(quizApp.questions);
  }
});

//search for quiz
const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function (e) {
  const searchedQuestions = quizApp.searchQuestion(e.target.value);
  renderQuizList(searchedQuestions);
});

//filter level
const filterLevelSelect = document.querySelector("#level-filter");

filterLevelSelect.addEventListener("change", function (e) {
  const filteredQuestions = quizApp.filterByLevel(e.target.value);
  renderQuizList(filteredQuestions);
});
