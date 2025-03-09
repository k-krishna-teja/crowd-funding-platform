import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/CampaignDetails.css";

const CampaignDetails = () => {
  const { id } = useParams(); // Extract campaign ID from the URL
  const [campaign, setCampaign] = useState(null); // State to store the campaign data
  const [error, setError] = useState(""); // State for error handling

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        console.log("Fetching campaign with ID:", id); // Log the campaign ID for debugging
        const response = await axios.get(
          `http://localhost:3000/campaigns/${id}`
        );
        console.log("Server response:", response.data); // Log the server response
        setCampaign(response.data); // Set the campaign data
      } catch (err) {
        console.error("Error fetching campaign details:", err); // Log the error
        setError("Failed to fetch campaign details. Please try again later.");
      }
    };

    fetchCampaign();
  }, [id]); // Effect runs when `id` changes

  // If there's an error, display a message
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Show a loading message while the campaign data is being fetched
  if (!campaign) {
    return <div className="loading-message">Loading campaign details...</div>;
  }

  return (
    <div className="campaign-details-container">
      <h1>{campaign.title || "No title available"}</h1>
      <p>{campaign.description || "No description available"}</p>
      {campaign.image && (
        <img
          src={campaign.image}
          alt={campaign.title}
          className="campaign-details-image"
        />
      )}
      <button className="btn btn-primary">Donate</button>{" "}
      {/* Donation functionality placeholder */}
    </div>
  );
};

export default CampaignDetails;
