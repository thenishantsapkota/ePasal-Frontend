import {
  FaFacebookSquare,
  FaYoutube,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              <b>Address:</b>Damak - 09, Shanti Marga
            </p>
            <p>
              <b>Phone:</b> +977-9801615642
            </p>
            <p>
              <b>Hours:</b> 10:00 - 18:00. Mon - Sat
            </p>
          </address>
          <h3>Follow Us</h3>
          <div className="socials">
            <a href="https://facebook.com/thenishantsapkota">
              <FaFacebookSquare size={24} />
            </a>
            <a href="#">
              <FaYoutube size={24} />
            </a>
            <a href="#">
              <FaTelegram size={24} />
            </a>
            <a href="https://instagram.com/thenishantsapkota">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/@snishant306">
              <FaXTwitter size={24} />
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
          <a href="/login">Sign In</a>
          <a href="/cart">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="install">
          <h3>Secured Payment Gateways</h3>
          <div className="payment-img">
            <a href="#">
              <img src="/images/pay/pay.png" alt="Payment Methods" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
