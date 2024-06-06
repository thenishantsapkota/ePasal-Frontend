import {
  FaFacebookSquare,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="contact">
          <a href="index.html">
            <img src="/images/logo.png" alt="Logo" />
          </a>
          <h3>Contact</h3>
          <address>
            <p>
              <b>Address:</b> Wellington Road, Street 32. San Francisco
            </p>
            <p>
              <b>Phone:</b> Wellington Road, Street 32. San Francisco
            </p>
            <p>
              <b>Hours:</b> 10:00 - 18:00. Mon - Sat
            </p>
          </address>
          <h3>Follow Us</h3>
          <div className="socials">
            <a href="#">
              <FaFacebookSquare size={24} />
            </a>
            <a href="#">
              <FaYoutube size={24} />
            </a>
            <a href="#">
              <FaTelegram size={24} />
            </a>
            <a href="#">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="about">
          <h3>About</h3>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="myaccount">
          <h3>My Account</h3>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="install">
          <h3>Secured Payment Gateways</h3>
          <div className="payment-img">
            <a href="#">
              <img src="//images/pay/pay.png" alt="Payment Methods" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
