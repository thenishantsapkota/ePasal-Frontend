import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import "./App.css";
import { Toaster } from "react-hot-toast";
import VerifyOTP from "./pages/VerifyOtp";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
