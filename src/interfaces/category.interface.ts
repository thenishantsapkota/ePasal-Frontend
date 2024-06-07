import { Product } from "./product.interface";

export interface Category {
  id: string;
  title: string;
  description: string;
  products: Product[];
}
