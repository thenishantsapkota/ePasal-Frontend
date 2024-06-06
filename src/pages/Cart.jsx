import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <main id="cart-page">
      <Header />
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty.</p>
            <p>Explore our products and start shopping!</p>
            <Link to="/" className="btn">
              Shop Now
            </Link>
          </div>
        ) : (
          <div>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${item.image}`}
                    alt={item.name}
                  />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.brand}</p>
                    <p>${item.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <FaTrash /> {/* Replace text with trash icon */}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Cart;
