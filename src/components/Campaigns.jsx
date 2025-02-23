// src/components/Campaigns.jsx
import React from "react";
import "./styles/Campaigns.css";

const campaigns = [
  {
    id: 1,
    title: "Save the Rainforest",
    description: "Help us protect the rainforest and its wildlife.",
    goal: "$10,000",
  },
  {
    id: 2,
    title: "Clean Water for All",
    description:
      "Provide clean and safe drinking water to communities in need.",
    goal: "$5,000",
  },
  {
    id: 3,
    title: "Education for Every Child",
    description: "Support education initiatives for underprivileged children.",
    goal: "$8,000",
  },
];

const Campaigns = () => {
  return (
    <div className="campaigns-bg">
      <div>
        <h1 className="text-primary">All Campaigns</h1>
        <p>
          Browse through the list of campaigns and find something that interests
          you.
        </p>
        <div className="campaigns-list">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <p>Goal: {campaign.goal}</p>
              <button className="donate-button">Donate</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
