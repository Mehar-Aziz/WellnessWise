import express from 'express';
import Resource from '../models/Resource.js'; 

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find(); 
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resources', error: err.message });
  }
});


export default router;
