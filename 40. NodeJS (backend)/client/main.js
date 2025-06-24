const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  for (let i = 0; i < 102; i++) {
    fetch("http://localhost:3030/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("products: ", data);
      });
  }
});
