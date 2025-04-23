const getAllBtn = document.querySelector("#get-all");
const getOneBtn = document.querySelector("#get-one");
const postBtn = document.querySelector("#post");
const patchBtn = document.querySelector("#patch");
const deleteBtn = document.querySelector("#delete");

const API_BASE_URL = "https://northwind.vercel.app/api";

//axios instance
const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 2000,
});

//interceptors (request, response)
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("REQUEST INTERCEPTOR WORKED HERE!");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("RESPONSE INTERCEPTOR WORKED HERE!");
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//get all request
getAllBtn.addEventListener("click", async () => {
  try {
    const { data: categories } = await instance.get("/categories");
    console.log(categories);
  } catch (error) {
    console.log(error);
  }
});

//get one request
getOneBtn.addEventListener("click", async () => {
  const id = 3;
  try {
    const { data: category } = await instance.get(`/categories/${id}`);
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
    const response = await instance.post("/categories", newCategory);
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
    const response = await instance.patch(`/categories/9`, updatedCategory);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

//delete
deleteBtn.addEventListener("click", async () => {
  try {
    const id = 3;
    const response = await instance.delete(`/categories/${id}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
