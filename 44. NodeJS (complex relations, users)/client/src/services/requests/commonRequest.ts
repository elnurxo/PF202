import instance from "../axiosInstance";
import type { AxiosResponse } from "axios";

export interface ApiWrapper<T> {
  message: string;
  data: T;
  totalProducts?: number;
}

// GET all - returns full wrapper with metadata
const getAll = async <T>(endpoint: string): Promise<ApiWrapper<T>> => {
  try {
    const response: AxiosResponse<ApiWrapper<T>> = await instance.get(endpoint);
    return response.data; // full wrapper object, not just data
  } catch (error) {
    console.error(`GET ALL request failed: ${endpoint}`, error);
    throw error;
  }
};

// GET one by id - returns full wrapper
const getOne = async <T>(
  endpoint: string,
  id: string
): Promise<ApiWrapper<T>> => {
  try {
    const response: AxiosResponse<ApiWrapper<T>> = await instance.get(
      `${endpoint}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`GET ONE request failed: ${endpoint}/${id}`, error);
    throw error;
  }
};

// POST - returns full AxiosResponse with wrapper
const post = async <Req, Res>(
  endpoint: string,
  newData: Req
): Promise<AxiosResponse<ApiWrapper<Res>>> => {
  try {
    const response = await instance.post<ApiWrapper<Res>>(endpoint, newData);
    return response;
  } catch (error) {
    console.error(`POST request failed: ${endpoint}`, error);
    throw error;
  }
};

// PATCH - returns full AxiosResponse with wrapper
const patch = async <Req, Res>(
  endpoint: string,
  id: string,
  updatedData: Partial<Req>
): Promise<AxiosResponse<ApiWrapper<Res>>> => {
  try {
    const response = await instance.patch<ApiWrapper<Res>>(
      `${endpoint}/${id}`,
      updatedData
    );
    return response;
  } catch (error) {
    console.error(`PATCH request failed: ${endpoint}/${id}`, error);
    throw error;
  }
};

// DELETE - returns full AxiosResponse
const deleteData = async (
  endpoint: string,
  id: string
): Promise<AxiosResponse> => {
  try {
    const response = await instance.delete(`${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.error(`DELETE request failed: ${endpoint}/${id}`, error);
    throw error;
  }
};

const controller = {
  getAll,
  getOne,
  post,
  patch,
  delete: deleteData,
};

export default controller;
