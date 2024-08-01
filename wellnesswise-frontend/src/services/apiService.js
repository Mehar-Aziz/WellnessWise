// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Adjust the URL if needed

export const fetchResources = async () => {
  try {
    const response = await axios.get(`${API_URL}/resources`);
    return response.data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
};
