import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/CreateCampaign.css";

const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle image selection and convert to base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setImage(base64Image); // Save the base64 image
        setPreview(base64Image); // Display a preview of the image
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        title,
        description,
        image, // Send base64 image
      };

      console.log("Sending payload:", payload);

      const response = await axios.post(
        "http://localhost:3000/campaigns",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Server response:", response.data);
      setMessage("Campaign created successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);
      navigate("/campaigns");
    } catch (error) {
      console.error("Error creating campaign:", error);
      setMessage("Error creating campaign");
    }
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
            required
          />
        </div>
        <div className="mb-3">
          <label className="create-campaign-form-label">Description:</label>
          <textarea
            className="create-campaign-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
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
        {preview && (
          <div className="create-campaign-image-preview mb-3">
            <img
              src={preview}
              alt="Preview"
              className="create-campaign-img-fluid"
            />
          </div>
        )}
        <button type="submit" className="create-campaign-button">
          Create Campaign
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateCampaign;
