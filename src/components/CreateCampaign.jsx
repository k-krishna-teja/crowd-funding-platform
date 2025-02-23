// src/components/CreateCampaign.jsx
import React, { useState } from "react";
import "./styles/CreateCampaign.css";

const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, description, image });
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="create-campaign-container">
      <h1 className="text-primary">Create a New Campaign</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="create-campaign-form-label">Campaign Title:</label>
          <input
            type="text"
            className="create-campaign-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="create-campaign-form-label">Description:</label>
          <textarea
            className="create-campaign-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="create-campaign-form-label">Upload Image:</label>
          <input
            type="file"
            className="create-campaign-input"
            onChange={handleImageChange}
          />
        </div>
        {image && (
          <div className="create-campaign-image-preview mb-3">
            <img
              src={image}
              alt="Campaign"
              className="create-campaign-img-fluid"
            />
          </div>
        )}
        <button type="submit" className="create-campaign-button">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CreateCampaign;
