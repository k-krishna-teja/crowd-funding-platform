const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample campaigns data (in a real application, this would come from a database)
let campaigns = [
  { id: 1, title: "Campaign 1", description: "Description for campaign 1" },
  { id: 2, title: "Campaign 2", description: "Description for campaign 2" },
  { id: 3, title: "Campaign 3", description: "Description for campaign 3" },
  // Add more sample campaigns as needed
];

// Route to get all campaigns
app.get('/campaigns', (req, res) => {
  res.json(campaigns);
});

// Route to get a specific campaign by ID
app.get('/campaigns/:id', (req, res) => {
  const campaignId = parseInt(req.params.id);
  const campaign = campaigns.find(c => c.id === campaignId);
  if (campaign) {
    res.json(campaign);
  } else {
    res.status(404).send('Campaign not found');
  }
});

// Route to create a new campaign
app.post('/campaigns', (req, res) => {
  const newCampaign = {
    id: campaigns.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  campaigns.push(newCampaign);
  res.status(201).json(newCampaign);
});

// Route to update a campaign
app.put('/campaigns/:id', (req, res) => {
  const campaignId = parseInt(req.params.id);
  const campaignIndex = campaigns.findIndex(c => c.id === campaignId);
  if (campaignIndex !== -1) {
    campaigns[campaignIndex] = {
      id: campaignId,
      title: req.body.title,
      description: req.body.description,
    };
    res.json(campaigns[campaignIndex]);
  } else {
    res.status(404).send('Campaign not found');
  }
});

// Route to delete a campaign
app.delete('/campaigns/:id', (req, res) => {
  const campaignId = parseInt(req.params.id);
  const campaignIndex = campaigns.findIndex(c => c.id === campaignId);
  if (campaignIndex !== -1) {
    campaigns.splice(campaignIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Campaign not found');
  }
});

// Example route for testing
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to handle campaign donations
app.post('/donate', (req, res) => {
  const { campaignId, amount } = req.body;
  // Handle the donation logic here (e.g., save to database)
  res.send(`Received donation of ${amount} for campaign ID ${campaignId}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
