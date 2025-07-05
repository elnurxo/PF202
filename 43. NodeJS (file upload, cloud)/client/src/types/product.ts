import type { Category } from "./category";

export type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  salePrice: number;
  category: Category;
};
