// src/api.js

const API_URL = "http://localhost:3001/api";

export const fetchSubscriptions = async () => {
  const response = await fetch(`${API_URL}/subscriptions`);
  if (!response.ok) throw new Error('Failed to fetch subscriptions');
  return response.json();
};

export const fetchRedemptions = async () => {
  const response = await fetch(`${API_URL}/redemptions`);
  if (!response.ok) throw new Error('Failed to fetch redemptions');
  return response.json();
};
