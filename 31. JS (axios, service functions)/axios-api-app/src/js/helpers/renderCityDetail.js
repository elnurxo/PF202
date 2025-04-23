export function renderCityDetail(city) {
  const cityElement = document.querySelector(".city");
  cityElement.innerHTML = `
           <div class="w-[90%] md:w-[50%] mx-auto card border transition border-gray-200 rounded hover:shadow p-6">
                    <img  class="object-cover h-80 w-full"
                        src="${city.flagURL}" alt="${city.name}"
                        title=${city.country}">
                    <h1 class="mt-1">City Name: <span class="text-blue-800" id="name"> ${
                      city.name
                    }</span></h1>
                    <h1>Country Name: <span class="text-blue-800" id="country"> ${
                      city.country
                    }</span></h1>
                    <h3 class="mt-1">Is Capital <span id="is-capital">${
                      city.isCapital ? "✅" : "❌"
                    }</span></h3>
                    <hr class="text-gray-300 my-2"/>
                    <p>${city.description}</p>
                    <div class="flex mt-3.5">
                        <button
                            class="info cursor-pointer hover:shadow transition rounded px-4 py-2 bg-blue-400 text-white">
                            <a href="index.html">go back</a>
                        </button>
                    </div>
                </div>
    `;
}
