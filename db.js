const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('campaign'); // Ensure your database name is 'una'
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectDB;
