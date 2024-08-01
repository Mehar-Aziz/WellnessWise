import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import userRoutes from './routes/userRoutes.js';
import resourcesRoutes from './routes/resourcesRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/WellnessWise')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple API route for testing
app.get('/api', (req, res) => {
  res.json({ message: 'API is working' });
});

// User route
app.use('/api/users', userRoutes);

// Resources route
app.use('/api/resources', resourcesRoutes);

// Define the port
const port = process.env.PORT || 3000;

// Create HTTP server
http.createServer(app).listen(port, () => {
  console.log(`HTTP Server is running on port ${port}`);
});
