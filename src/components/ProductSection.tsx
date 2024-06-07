import { FC, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { api } from "../utils/api";
import { Category } from "../interfaces";

const ProductSection: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const url = "/products/categories/";

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const response = await api.get(url);
        const categories: Category[] = response.data.data.map((data: any) => {
          return {
            id: data.id,
            title: data.name,
            description: data.description,
            products: data.products.map((product: any) => {
              return {
                id: product.id,
                image: product.url,
                name: product.name,
                brand: product.manufacturer,
                price: product.price,
                rating: Math.floor(Math.random() * 5) + 1,
              };
            }),
          };
        });

        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, []);

  return (
    <section className="product-section section-p1" id="products">
      {categories.map((category) => (
        <div key={category.id}>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
          <div className="pro-collection">
            {category.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;
