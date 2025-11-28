import React, { useState } from "react";
import Sidebar from "./Sidebar";   // <-- Added Sidebar import
import "./Profile.css";

function Profile() {
  const user = {
    name: "Avinash Godavarthi",
    email: "avinash@example.com",
    username: "avinash_g",
    joined: "March 2024",
  };

  const initial = user.username.charAt(0).toUpperCase();

  // State for storing uploaded image
  const [profileImage, setProfileImage] = useState(null);

  // Handle image upload
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfileImage(imgURL);
    }
  }

  return (
    <div className="profile-main">

      {/* Sidebar on the left */}
      <Sidebar />

      {/* Profile content on the right */}
      <div className="profile-container">

        <div className="profile-header">
          <h2>Your Profile</h2>
        </div>

        <div className="profile-card">

          {/* Initial or Uploaded Image */}
          <div className="profile-initial">
            {profileImage ? (
              <img src={profileImage} className="profile-img" alt="user" />
            ) : (
              <span>{initial}</span>
            )}
          </div>

          <div className="profile-right">

            <div className="profile-info">
              <p><span>Name:</span> {user.name}</p>
              <p><span>Email:</span> {user.email}</p>
              <p><span>Username:</span> {user.username}</p>
              <p><span>Joined:</span> {user.joined}</p>
            </div>

            {/* Upload Picture */}
            <label className="upload-btn">
              Add Your Picture
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>

            <button className="edit-btn">Edit Profile</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
