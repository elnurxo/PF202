import instance from "../api/axiosIntance.js";
import { endpoints } from "../constants/constants.js";

//get all cities
export async function getAllCities(name) {
  try {
    let url = endpoints.cities;
    if (name) {
      url += `?name=${name}`;
    }
    const { data: cities, status } = await instance.get(url);
    return {
      ok: true,
      status: status,
      data: cities,
      message: "cities retrieved successfully!",
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      message: error.message || "failed to retrieve cities",
      data: null,
    };
  }
}

//get city by id
export async function getOneCity(id) {
  try {
    const { data: city, status } = await instance.get(
      endpoints.cities + `/${id}`
    );
    return {
      ok: true,
      status: status,
      data: city,
      message: "city retrieved successfully!",
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      message: error.message || "failed to retrieve city",
      data: null,
    };
  }
}

//post city
export async function postCity(newCity) {
  try {
    const { data: postedCity, status } = instance.post(
      endpoints.cities,
      newCity
    );
    return {
      ok: true,
      status,
      data: postedCity,
      message: "city posted successfully!",
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      message: error.message || "failed to post city!",
      data: null,
    };
  }
}

//update city (patch)
export async function updateCity(id, updatingCity) {
  try {
    const { data: updatedCity, status } = await instance.patch(
      endpoints.cities + `/${id}`,
      updatingCity
    );
    return {
      ok: true,
      status,
      data: updatedCity,
      message: "city updated successfully!",
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      data: null,
      message: error.message || "failed to update city!",
    };
  }
}

//delete city by id
export async function deleteCity(id) {
  try {
    const { data: deletedCity, status } = await instance.delete(
      endpoints.cities + `/${id}`
    );
    if (status == 404) {
      return {
        ok: false,
        status,
        message: "not found!",
        data: null,
      };
    }
    return {
      ok: true,
      status,
      message: "city deleted successfully!",
      data: deletedCity,
    };
  } catch (error) {}
}
