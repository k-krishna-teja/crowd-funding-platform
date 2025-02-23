import React from "react";
import { Link } from "react-router-dom";
import "./styles/Main.css";

const Main = () => {
  return (
    <div className="main-bg">
      <div className="text-center welcome-section">
        <h1 className="display-4">Welcome to the Crowdfunding Platform</h1>
        <p className="lead">Discover and support innovative campaigns!</p>
        <div className="button-group">
          <Link to="/donate" className="btn btn-warning btn-lg mx-2">
            Donate
          </Link>
          <Link to="/create-campaign" className="btn btn-success btn-lg mx-2">
            Create Campaign
          </Link>
          <Link to="/campaigns" className="btn btn-primary btn-lg mx-2">
            Explore All Campaigns
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
