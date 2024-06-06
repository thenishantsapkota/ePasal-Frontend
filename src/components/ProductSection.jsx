import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { api } from "../utils/apiUrls";

function ProductSection() {
  const [categories, setCategories] = useState([]);

  const url = "/products/categories/";

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const response = await api.get(url);
        const categories = response.data.data.map((data) => {
          return {
            id: data.id,
            title: data.name,
            description: data.description,
            products: data.products.map((product) => {
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
          <h2>{category.name}</h2>
          <div className="pro-collection">
            {category.products.slice(0, 10).map((product, index) => (
              <ProductCard
                key={index}
                product={product}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductSection;
