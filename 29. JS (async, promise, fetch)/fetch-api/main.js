// API - Application Programming Interface

// document.addEventListener("DOMContentLoaded", function () {
//   //API -
//   const API_URL = "https://northwind.vercel.app/api/categories";
//   //FETCH API - BOM (built-in)
//   const response = fetch(API_URL); //promise
//   //then, catch, finally
//   response
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then((cats) => {
//       console.log("cats: ", cats);
//     })
//     .catch((err) => {
//       console.log("error: ", err.message && "failed to fetch!");
//     })
//     .finally(() => {
//       console.log("API request ended!");
//     });
// });

// const btn = document.querySelector("#products-btn");
// btn.addEventListener("click", async function () {
//   //   fetch("https://fakestoreapi.com/products")
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         return response.json();
//   //       }
//   //     })
//   //     .then((data) => console.log(data))
//   //     .catch((err) => {
//   //       console.log("error: ", err);
//   //     });

//   //await

//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// });

//http status code - 100, 200, 300, 400, 500

//http requests - GET, GET BY ID (params), POST, PUT/PATCH (partial), DELETE
const getAllBtn = document.querySelector("#get-all");
const getOneBtn = document.querySelector("#get-one");
const deleteBtn = document.querySelector("#delete");
const postBtn = document.querySelector("#post");
const patchBtn = document.querySelector("#patch");
const putBtn = document.querySelector("#put");
const API_URL = "https://northwind.vercel.app/api/categories"; //GET, POST, DELETE

getAllBtn.addEventListener("click", async function () {
  try {
    const response = await fetch(API_URL, {
      method: "GET", //default - GET
    });
    const categories = await response.json();
    console.log("categories: ", categories);
  } catch (error) {
    console.log("error: ", error);
  }
});

//ID
getOneBtn.addEventListener("click", async function () {
  const id = +window.prompt("enter your id: ");
  if (!id) {
    window.alert("id is not provided!");
    return;
  }
  try {
    const response = await fetch(API_URL + `/${id}`, {
      method: "GET",
    });
    const category = await response.json(); //parse
    console.log(`category with id | ${id}: `, category);
  } catch (error) {
    console.log("error: ", error);
  }
});

postBtn.addEventListener("click", async function () {
  const name = window.prompt("enter category name: ");
  const description = window.prompt("enter category description: ");

  //simple validation
  if (!name.trim() || !description.trim()) {
    window.alert("invalid format!");
    return;
  }

  try {
    const newCategory = {
      name,
      description,
    };
    const response = await fetch(API_URL, {
      method: "POST",
      //payload
      body: JSON.stringify(newCategory),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("POST response: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
});

//ID
deleteBtn.addEventListener("click", async function () {
  const id = +window.prompt("enter category id: ");

  if (!id) {
    window.alert("id is not provided!");
    return;
  }

  try {
    const response = await fetch(API_URL + `/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("delete response: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
});

//update - PATCH (partial update), PUT (all update) ID
patchBtn.addEventListener("click", async function () {
  const id = +window.prompt("enter category id to update: ");
  if (!id) {
    window.alert("id is not provided!");
    return;
  }

  const updatedCategory = { name: "UPDATED CATEGORY!" }; //PATCH - Partial Update
  try {
    const response = await fetch(API_URL + `/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedCategory),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("updated response: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
});

//ID
putBtn.addEventListener("click", async function () {
  const id = +window.prompt("enter category id to update: ");
  if (!id) {
    window.alert("id is not provided!");
    return;
  }

  const updatedCategory = { name: "UPDATED CATEGORY!" }; //PUT
  try {
    const response = await fetch(API_URL + `/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedCategory),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("updated response: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
});
