import { endpoints } from "../../constants/index.js";
import instance from "../instance.js";

//get all books
export const getAll = async () => {
  try {
    let response = await instance.get(endpoints.books);
    return response.data;
  } catch (error) {
    return error;
  }
};

//get book by id
export const getOne = async (id) => {
  try {
    let response = await instance.get(endpoints.books + `/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

//post
export const post = async (newBook) => {
  try {
    let response = await instance.post(endpoints.books, newBook);
    return response;
  } catch (error) {
    return error;
  }
};

//delete
export const deleteBook = async (id) => {
  try {
    let response = await instance.delete(endpoints.books + `/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

//update - patch
export const patch = async (id, updatedBook) => {
  try {
    let response = await instance.patch(
      endpoints.books + `/${id}`,
      updatedBook
    );
    return response;
  } catch (error) {
    return error;
  }
};
