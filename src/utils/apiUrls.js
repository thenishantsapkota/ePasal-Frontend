import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const urls = {
  MENS_CLOTHING: "/products/products/5",
  WOMENS_CLOTHING: "/products/products/6",
  KIDS_TOYS: "/products/products/7",
  ACCESSORIES: "/products/products/8",
  PRODUCTS: "/products"
};
