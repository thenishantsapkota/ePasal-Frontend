import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { api } from "../utils";
import { User } from "../interfaces/profile.interface";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    first_name: "",
    is_admin: false,
    last_name: "",
    phone: "",
    profile_picture: "",
    role: "",
    verified: false,
  });
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Token not found, please login");
    navigate("/login");
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/users/me");
        const user = response.data.data;

        setUser(user);
      } catch (error) {
        console.error("Error fetching profile:", error);

        navigate("/login");
      }
    };

    fetchProfile();
  }, []);

  return (
    <main id="profile-page">
      <Header />
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-picture" id="profile-picture">
              {user.profile_picture ? (
                <img
                  src={user.profile_picture}
                  alt="Profile"
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              ) : (
                <span>N/A</span>
              )}
            </div>
            <div className="profile-details">
              <h1 id="profile-name">
                {user.first_name && user.last_name
                  ? `${user.first_name} ${user.last_name}`
                  : "N/A"}
              </h1>
              <p id="profile-email">{user.email}</p>
              <p id="profile-role">{user.role}</p>
            </div>
          </div>
          <div className="profile-info">
            <label htmlFor="profile-verified">Verified:</label>
            <span id="profile-verified">
              {user.verified ? "Verified" : "Not Verified"}
            </span>
            <label htmlFor="profile-admin">Role:</label>
            <span id="profile-admin">{user.is_admin ? "Admin" : "User"}</span>
            <label htmlFor="profile-phone">Phone:</label>
            <span id="profile-phone">{user.phone ? user.phone : "N/A"}</span>
          </div>
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProfilePage;
