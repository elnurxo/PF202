import axios from "axios";
import { API_BASE_URL } from "../constants/index.js";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

export default instance;
