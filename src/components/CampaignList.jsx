import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/CampaignList.css";

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [showFullDescriptions, setShowFullDescriptions] = useState({});

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:3000/campaigns");
        setCampaigns(response.data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const toggleDescription = (id) => {
    setShowFullDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleShare = (title, description) => {
    const shareData = {
      title,
      text: description,
      url: window.location.href,
    };
    if (navigator.share) {
      navigator
        .share(shareData)
        .catch((error) => console.error("Share error:", error));
    }
  };

  return (
    <div className="campaign-list-container">
      <h1 className="text-primary">All Campaigns</h1>
      <ul className="campaign-list">
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="campaign-card">
            {campaign.image ? (
              <img
                src={campaign.image}
                alt={campaign.title || "Campaign Image"}
                className="campaign-image"
              />
            ) : (
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder Image"
                className="campaign-image"
              />
            )}
            <Link to={`/campaigns/${campaign.id}`} className="campaign-title">
              <h3>{campaign.title || "No title available"}</h3>
            </Link>
            <p className="campaign-description">
              {showFullDescriptions[campaign.id]
                ? campaign.description || "No description available"
                : `${campaign.description?.substring(0, 100) || ""}...`}
              <button
                className="read-more-btn"
                onClick={() => toggleDescription(campaign.id)}
              >
                {showFullDescriptions[campaign.id] ? "Show Less" : "Read More"}
              </button>
            </p>
            <div className="button-group">
              <button
                className="btn btn-secondary"
                onClick={() =>
                  handleShare(campaign.title, campaign.description)
                }
              >
                Share
              </button>
              <Link to={`/donate/${campaign.id}`} className="btn btn-primary">
                Donate
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
