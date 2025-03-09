const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const app = express();
const port = 3000;

// Middleware to handle JSON and form data with increased payload size
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());

let db;
connectDB().then((database) => {
  db = database;
  console.log("Connected to MongoDB");
});

// Route to create a new campaign
app.post("/campaigns", async (req, res) => {
  console.log("Received data from client:", req.body);

  const { title, description, image } = req.body;

  // Validate and sanitize input
  const newCampaign = {
    id: Date.now(),
    title: title || null,
    description: description || null,
    image: typeof image === "string" && image.startsWith("data:image/")
      ? image
      : null, // Accept only valid base64 images
  };

  try {
    const result = await db.collection("campdata").insertOne(newCampaign);
    console.log("New campaign inserted with ID:", result.insertedId);
    res.status(201).json({ ...newCampaign, _id: result.insertedId });
  } catch (error) {
    console.error("Error inserting campaign:", error.message);
    res.status(500).send("Error creating campaign");
  }
});

// Route to fetch all campaigns
app.get("/campaigns", async (req, res) => {
  try {
    const campaigns = await db.collection("campdata").find().toArray();
    res.json(campaigns);
  } catch (error) {
    console.error("Error fetching campaigns:", error.message);
    res.status(500).send("Error fetching campaigns");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get("/campaigns/:id", async (req, res) => {
  const { id } = req.params; // Get the ID from the URL
  console.log("Requested ID:", id); // Log the received ID for debugging

  try {
    // Fetch the campaign where `id` matches the `id` in the database.
    const campaign = await db.collection("campdata").findOne({ id: parseInt(id) });
    if (campaign) {
      res.json(campaign);
    } else {
      res.status(404).send("Campaign not found");
    }
  } catch (error) {
    console.error("Error fetching campaign:", error.message);
    res.status(500).send("Internal server error");
  }
});
