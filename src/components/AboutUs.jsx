// src/components/AboutUs.jsx
import React from "react";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-text">
          We are a dedicated team committed to helping creators bring their
          ideas to life.
        </p>
        <h2 className="about-us-subtitle">Our Mission</h2>
        <p className="about-us-text">
          Our mission is to provide a platform where creators can easily launch
          and manage their campaigns while allowing backers to discover,
          support, and engage with innovative ideas.
        </p>
        <h2 className="about-us-subtitle">Our Team</h2>
        <p className="about-us-text">
          We have a diverse team of experienced professionals passionate about
          making a positive impact.
        </p>
        <h2 className="about-us-subtitle">Why Trust Us?</h2>
        <p className="about-us-text">
          We prioritize transparency, security, and support to ensure a
          trustworthy environment for both creators and backers. Our platform is
          built with the latest technologies to safeguard your data and
          transactions.
        </p>
        <h2 className="about-us-subtitle">Join Us</h2>
        <p className="about-us-text">
          Become a part of our community and help bring innovative ideas to
          life. Together, we can make a difference.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
