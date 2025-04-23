const citiesElement = document.querySelector(".cities");

export function renderCityCards(arr) {
  citiesElement.innerHTML = "";
  arr.forEach((city) => {
    citiesElement.innerHTML += `
         <div class="card border transition border-gray-200 rounded hover:shadow p-6">
          <h1>City Name: <span class="text-blue-800" id="name"> ${
            city.name
          }</span></h1>
          <h3 class="mt-1">Is Capital <span id="is-capital">${
            city.isCapital ? "✅" : "❌"
          }</span></h3>
          <div class="flex mt-3.5">
            <button class="info cursor-pointer hover:shadow transition rounded px-4 py-2 bg-blue-400 text-white">
              <a href="detail.html?id=${city.id}">ℹ️</a>
            </button>
            <button class="delete cursor-pointer hover:shadow transition rounded ml-2 px-4 py-2 bg-red-400 text-white">
              <a href="detail.html?id=2">🗑️</a>
            </button>
          </div>
        </div>
        `;
  });
}
