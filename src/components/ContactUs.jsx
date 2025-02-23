// src/components/ContactUs.jsx
import React from "react";
import "./styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-bg">
      <div className="container">
        <h1 className="text-primary">Get In Touch</h1>
        <p>Feel free to contact us in case of any queries.</p>
        <div
          className="form-container"
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <form>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-details-container">
          <div className="contact-details">
            <div className="left">
              <h2>Our Office</h2>
              <p>ROTARACT IIITM</p>
              <p>IIITM Campus,</p>
              <p>Morena Link Rd,</p>
              <p>Gwalior, Madhya Pradesh 474015</p>
            </div>
            <div className="right">
              <h2>Contact Us</h2>
              <p>Email: rotaract@iiitm.ac.in</p>
              <p>Phone: +91-9876543210</p>
            </div>
          </div>
          <div className="map mt-4">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.08612057806!2d144.9560543158933!3d-37.81627974262551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce8a0!2zU291dGhiYW5rLCBNZWxib3VybmUgVklDIDMwMDAsIEF1c3RyYWxpYQ!5e0!3m2!1sen!2sus!4v1516291992096"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
