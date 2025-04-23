import axios from "axios";
import { API_BASE_URL } from "../constants/constants.js";

export const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 6000, //6s
  timeoutErrorMessage: "failed to fetch!",
});

export default instance;
