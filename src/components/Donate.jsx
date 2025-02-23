// src/components/Donate.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./styles/Donate.css";

// Sample campaigns array (ensure you have this data available or fetched from an API)
const campaigns = [
  { id: 1, title: "Campaign 1", description: "Description for campaign 1" },
  { id: 2, title: "Campaign 2", description: "Description for campaign 2" },
  { id: 3, title: "Campaign 3", description: "Description for campaign 3" },
  { id: 4, title: "Campaign 4", description: "Description for campaign 4" },
  { id: 5, title: "Campaign 5", description: "Description for campaign 5" },
  { id: 6, title: "Campaign 6", description: "Description for campaign 6" },
  { id: 7, title: "Campaign 7", description: "Description for campaign 7" },
  { id: 8, title: "Campaign 8", description: "Description for campaign 8" },
  { id: 9, title: "Campaign 9", description: "Description for campaign 9" },
  { id: 10, title: "Campaign 10", description: "Description for campaign 10" },
];

const Donate = () => {
  const { id } = useParams();
  const campaign = campaigns.find((campaign) => campaign.id === parseInt(id));

  if (!campaign) {
    return <p>Campaign not found</p>;
  }

  return (
    <div className="container">
      <h1 className="text-primary">Donate to {campaign.title}</h1>
      <div className="campaign-card">
        <h2>{campaign.title}</h2>
        <p>{campaign.description}</p>
        {/* Add your donation form or logic here */}
      </div>
    </div>
  );
};

export default Donate;
