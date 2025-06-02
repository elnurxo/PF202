import instance from "../instance.js";
import { endpoints } from "../constants.js";

//get all courses
export const getAll = async () => {
  try {
    let response = await instance.get(endpoints.courses);
    return response.data;
  } catch (error) {
    return error;
  }
};

//get by id
export const getOne = async (id) => {
  try {
    let response = await instance.get(endpoints.courses + `/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

//post
export const post = async (newCourse) => {
  try {
    let response = await instance.post(endpoints.courses, newCourse);
    return response;
  } catch (error) {
    return error;
  }
};

//delete
export const deleteCourse = async (id) => {
  try {
    let response = await instance.delete(endpoints.courses + `/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

//update - patch
export const patch = async (id, updatedCourse) => {
  try {
    let response = await instance.patch(
      endpoints.courses + `/${id}`,
      updatedCourse
    );
    return response;
  } catch (error) {
    return error;
  }
};
