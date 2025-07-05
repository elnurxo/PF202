import Endpoints from "../enums/endpoints";

export const API_BASE_URL: string = "http://localhost:5050";

export const endpoints: {
  products: Endpoints;
  categories: Endpoints;
  sliders: Endpoints;
  messages: Endpoints;
} = {
  products: Endpoints.products,
  categories: Endpoints.categories,
  sliders: Endpoints.sliders,
  messages: Endpoints.messages,
};
