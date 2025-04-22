import Swal from "sweetalert2";
const groupsWrapper = document.querySelector(".groups");
const loadingElement = document.querySelector(".loading");
const API_BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", async function () {
  try {
    loadingElement.classList.replace("hidden", "flex");
    const response = await fetch(API_BASE_URL + "/groups");
    const groups = await response.json();
    loadingElement.classList.replace("flex", "hidden");
    renderGroupCards(groups);
  } catch (error) {
    alert("failed to fetch data!");
  }
});

function renderGroupCards(arr) {
  groupsWrapper.innerHTML = "";
  arr.forEach((group) => {
    groupsWrapper.innerHTML += `
         <div class="card rounded transition hover:shadow p-4 border border-gray-200 space-y-2">
          <h2 class="text-center font-bold text-lg">${group.title}</h2>
          <article class="space-y-1 text-sm text-gray-700">
            <p><span class="font-semibold">Major:</span> ${group.major}</p>
            <p><span class="font-semibold">Teacher:</span> ${group.teacher}</p>
            <p><span class="font-semibold">Mentor:</span> ${group.mentor}</p>
            <p>
              <span class="font-semibold">Status:</span>
              <span class="${
                group.isActive ? "text-green-600" : "text-red-600"
              } font-medium">${group.isActive ? "Active" : "Ended"}</span>
            </p>
            <p><span class="font-semibold">Members:</span> ${
              group.membersCount
            }</p>
            <p><span class="font-semibold">Current Module:</span> ${
              group.currentModule
            }</p>
            <p><span class="font-semibold">Room:</span> ${group.room}</p>
          </article>

          <div data-id="${
            group.id
          }" class="wrapper flex justify-end gap-2 pt-4">
            <button class="edit px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit</button>
            <button class="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition">
             <a href="detail.html?id=${group.id}">Info</a>
            </button>
            <button class="delete px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
          </div>
        </div>
        `;
  });

  //delete feature
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          //delete request
          try {
            const id = this.closest(".wrapper").getAttribute("data-id");
            const response = await fetch(API_BASE_URL + `/groups/${id}`, {
              method: "DELETE",
            });
            //DELETE FROM UI - optimistic update
            this.closest('.card').remove(); //alternative get all groups, render
            if (response.ok) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Failed!",
                text: "Your group could not deleted.",
                icon: "error",
              });
            }
          } catch (error) {
            Swal.fire({
              title: "Failed!",
              text: "Your group could not deleted.",
              icon: "error",
            });
          }
        }
      });
    });
  });
}
