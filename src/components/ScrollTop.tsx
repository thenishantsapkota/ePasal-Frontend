import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button onClick={scrollToTop} className={`scroll-to-top ${visible ? "show" : ""}`}>
      <FaArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;
