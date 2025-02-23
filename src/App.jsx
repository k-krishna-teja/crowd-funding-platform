import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import CampaignDetails from "./components/CampaignDetails";
import CreateCampaign from "./components/CreateCampaign";
import UserProfile from "./components/UserProfile";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import Donate from "./components/Donate";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Navigation />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/campaigns/:id" element={<CampaignDetails />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/donate/:id" element={<Donate />} />{" "}
            {/* Updated path */}
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
