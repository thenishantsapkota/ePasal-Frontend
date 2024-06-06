import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useCart } from "../contexts/CartContext";

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout successful");
  };

  return (
    <header>
      <div id="header">
        <div className="header-logo">
          <Link to="/">
            <img src="images/logo.png" alt="" />
          </Link>
        </div>
        <div className="header-list">
          <nav className="header-list-nav">
            <ul>
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink to="products" smooth={true} className="shop-link">
                  Shop
                </ScrollLink>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              {token ? (
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="header-list-icon">
            <Link to="/cart">
              <i className="fa fa-bag-shopping"></i>
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
