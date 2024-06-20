// src/api/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/SSEBASTIAN210/mutualFundAPI/1.0.0/api/subscriptions', // Replace with your actual API URL
  headers: {
    'Content-Type': 'application/json',
    // Add authentication headers if needed, e.g., Authorization: `Bearer ${token}`
  },
});

export default axiosInstance;
