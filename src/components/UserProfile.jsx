// src/components/UserProfile.jsx
import React from "react";
import "./styles/UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-card">
      <h1 className="profile-title">User Profile</h1>
      <div className="profile-picture">
        <img src="path/to/profile-picture.jpg" alt="Profile" />
        <button className="btn">Change Picture</button>
      </div>
      <div className="profile-section">
        <h2>Personal Information</h2>
        <p>
          <strong>First Name:</strong> John
        </p>
        <p>
          <strong>Surname:</strong> Doe
        </p>
        <p>
          <strong>Email:</strong> john.doe@example.com
        </p>
        <p>
          <strong>Mobile Number:</strong> (optional) 123-456-7890
        </p>
      </div>
      <div className="profile-section">
        <h2>Your Contributions</h2>
        <ul>
          <li>Campaign A - $50</li>
          <li>Campaign B - $30</li>
          <li>Campaign C - $20</li>
        </ul>
      </div>
      <div className="profile-section">
        <h2>Your Campaigns</h2>
        <ul>
          <li>Campaign X</li>
          <li>Campaign Y</li>
          <li>Campaign Z</li>
        </ul>
      </div>
      <div className="profile-options">
        <button className="btn">Edit Profile</button>
        <button className="btn">Logout</button>
      </div>
      <div className="profile-section">
        <h2>Feedback</h2>
        <button className="btn">Give Feedback</button>
      </div>
      <div className="profile-section">
        <h2>Help Center</h2>
        <button className="btn">Visit Help Center</button>
      </div>
      <div className="profile-section">
        <h2>Other Options</h2>
        <button className="btn">Settings</button>
        <button className="btn">Privacy Policy</button>
      </div>
    </div>
  );
};

export default UserProfile;
