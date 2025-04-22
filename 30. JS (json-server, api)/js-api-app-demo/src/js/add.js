const addForm = document.querySelector("#add-form");
const formInputs = {
  title: document.querySelector("#title"),
  major: document.querySelector("#major"),
  teacher: document.querySelector("#teacher"),
  mentor: document.querySelector("#mentor"),
  isActive: document.querySelector("#isActive"),
  memberCount: document.querySelector("#memberCount"),
  currentModule: document.querySelector("#currentModule"),
  room: document.querySelector("#room"),
};
const API_BASE_URL = "http://localhost:3000";
var notyf = new Notyf({
  duration: 1500,
  position: {
    x: "right",
    y: "top",
  },
});

addForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const newGroup = {
    title: formInputs.title.value,
    major: formInputs.major.value,
    teacher: formInputs.teacher.value,
    mentor: formInputs.mentor.value,
    isActive: formInputs.isActive.checked,
    memberCount: formInputs.memberCount.value,
    currentModule: formInputs.currentModule.value,
    room: formInputs.room.value,
  };

  const response = await fetch(API_BASE_URL + "/groups", {
    method: "POST",
    body: JSON.stringify(newGroup),
    headers: {
      "Content-Type": "application/json",
    },
  });
  await response.json();
  notyf.success("New group added!");
  resetForm();
  setTimeout(() => {
    window.location.replace("index.html");
  }, 1500);
});

function resetForm() {
  formInputs.title.value = "";
  formInputs.teacher.value = "";
  formInputs.mentor.value = "";
  formInputs.currentModule.value = "";
  formInputs.isActive.checked = false;
  formInputs.memberCount.value = "";
  formInputs.room.value = "";
  formInputs.major.value = "";
}
