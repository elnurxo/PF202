// src/controllers/controller.ts
import instance from "../axiosInstance";
import type { AxiosResponse } from "axios";
import type { SliderData } from "../../interfaces/sliderData";
import type { ApiResponse } from "../../interfaces/apiResponse";


// get all
const getAll = async <T = SliderData[]>(
  endpoint: string
): Promise<ApiResponse<T> | unknown> => {
  try {
    const response: AxiosResponse<T> = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

// get by id
const getOne = async <T = SliderData>(
  endpoint: string,
  id: string
): Promise<T | unknown> => {
  try {
    const response: AxiosResponse<T> = await instance.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

// post
const post = async <T = SliderData>(
  endpoint: string,
  newData: T
): Promise<AxiosResponse | unknown> => {
  try {
    const response = await instance.post(endpoint, newData);
    return response;
  } catch (error) {
    return error;
  }
};

// delete
const deleteData = async (
  endpoint: string,
  id: string
): Promise<AxiosResponse | unknown> => {
  try {
    const response = await instance.delete(`${endpoint}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

// update (patch)
const patch = async <T = SliderData>(
  endpoint: string,
  id: string,
  updatedData: Partial<T>
): Promise<AxiosResponse | unknown> => {
  try {
    const response = await instance.patch(`${endpoint}/${id}`, updatedData);
    return response;
  } catch (error) {
    return error;
  }
};

const controller = {
  getAll,
  getOne,
  post,
  delete: deleteData,
  update: patch,
};

export default controller;
