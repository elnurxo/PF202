const id = new URLSearchParams(window.location.search).get("id");
const groupElement = document.querySelector(".group");
const API_BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch(API_BASE_URL + `/groups/${id}`);
    const group = await response.json();

    groupElement.innerHTML = `
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
            <button class="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition">
             <a href="index.html">Go back</a>
            </button>
          </div>
        </div>
    `;
  } catch (error) {
    window.location.replace('index.html');
  }
});
