import toast from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useCart } from "../contexts/CartContext";
import { FaShoppingBag } from "react-icons/fa";

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    toast.success("Logout successful");
  };

  const getLinkClass = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header>
      <div id="header">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="header-list">
          <nav className="header-list-nav">
            <ul>
              <li>
                <Link className={getLinkClass("/")} to="/">
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="products"
                  smooth={true}
                  className="shop-link"
                >
                  Shop
                </ScrollLink>
              </li>
              <li>
                <Link className={getLinkClass("/blog")} to="/blog">
                  Blog
                </Link>
              </li>
              <li>
              <ScrollLink
                  to="footer"
                  smooth={true}
                  className="shop-link"
                >
                  About
                </ScrollLink>
              </li>
              <li>
              <ScrollLink
                  to="footer"
                  smooth={true}
                  className="shop-link"
                >
                  Contact Us
                </ScrollLink>
              </li>
              {token ? (
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className={getLinkClass("/login")} to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="header-list-icon">
            <Link to="/cart" >
              <FaShoppingBag />
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
