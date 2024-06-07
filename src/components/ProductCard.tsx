import React, { FC } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { Product } from "../interfaces";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "/images/products/f1.png";
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    const rating = product.rating;
    const fullStar = index < Math.floor(rating);
    const halfStar = index < Math.ceil(rating) && !fullStar;
    return (
      <span key={index}>
        {fullStar ? (
          <FaStar color="gold" />
        ) : halfStar ? (
          <FaStarHalfAlt color="gold" />
        ) : (
          <FaRegStar color="gold" />
        )}
      </span>
    );
  });

  return (
    <div className="product-cart">
      <img
        src={`${import.meta.env.VITE_BASE_URL}${product.image}`}
        alt="product image"
        onError={handleImageError}
      />
      <br />
      <span>{product.brand}</span>
      <h4>{product.name}</h4>
      <div className="stars">{stars}</div>
      <h4 className="price">${product.price}</h4>
      <i
        className="fa-solid fa-cart-shopping buy-icon"
        onClick={handleAddToCart}
      ></i>
    </div>
  );
};

export default ProductCard;
