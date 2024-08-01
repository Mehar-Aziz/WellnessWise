import express from 'express';
import Resource from '../models/Resource.js'; // Import your Resource model

const router = express.Router();

// Get all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find(); // Fetch all resources from the database
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resources', error: err.message });
  }
});

// Add more routes if needed (e.g., GET by ID, POST, DELETE)

export default router;
