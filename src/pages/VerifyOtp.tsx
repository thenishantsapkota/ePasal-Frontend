import React, { useState, useRef, useEffect } from "react";
import { api } from "../utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (user && user.verified) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleCompleteOTP();
    }
  }, [otp]);

  const handleCompleteOTP = () => {
    const event = new Event('submit', { bubbles: true, cancelable: true });
    const form = document.querySelector('form');
    form?.dispatchEvent(event);
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const otpValue = otp.join("");

    const verifyPromise = api
      .post(
        "/users/verify",
        { otp: parseInt(otpValue) },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/login");
      })
      .catch((error) => {
        setOTP(["", "", "", "", "", ""]);
        throw error;
      });

    toast.promise(verifyPromise, {
      loading: "Verifying OTP...",
      success: "OTP verified successfully",
      error: "OTP verification failed",
    });
  };

  return (
    <div id="verify-otp">
      <form className="otp-form" onSubmit={handleSubmit}>
        <img src="/images/logo.png" alt="Logo" />
        <label>
          Enter OTP:
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputsRef.current[index] = el)}
                required
              />
            ))}
          </div>
        </label>
      </form>
    </div>
  );
}

export default VerifyOTP;
