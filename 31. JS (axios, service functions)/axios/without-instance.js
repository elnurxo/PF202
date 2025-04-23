const getAllBtn = document.querySelector("#get-all");
const getOneBtn = document.querySelector("#get-one");
const postBtn = document.querySelector("#post");
const patchBtn = document.querySelector("#patch");
const deleteBtn = document.querySelector("#delete");

const API_BASE_URL = "https://northwind.vercel.app/api";

//get all request
getAllBtn.addEventListener("click", async () => {
  try {
    const { data: categories } = await axios.get(API_BASE_URL + "/categories");
    console.log(categories);
  } catch (error) {
    console.log(error);
  }
});

//get one request
getOneBtn.addEventListener("click", async () => {
  const id = 6;
  try {
    const { data: category } = await axios.get(API_BASE_URL + `/categories`, {
      params: {
        id,
      },
    });
    console.log(category);
  } catch (error) {
    console.log(error);
  }
});

//post
postBtn.addEventListener("click", async () => {
  try {
    const newCategory = {
      name: "axios",
      description: "lorem ipsum",
    };
    const response = await axios.post({
      method: "POST",
      url: API_BASE_URL + "/categories",
      data: newCategory,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

//patch
patchBtn.addEventListener("click", async () => {
  try {
    const updatedCategory = {
      name: "axios UPDATED!",
    };
    const response = await axios.patch(
      API_BASE_URL + "/categories/9",
      updatedCategory
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

//delete
deleteBtn.addEventListener("click", async () => {
  try {
    const response = await axios.delete(API_BASE_URL + "/categories/4");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
