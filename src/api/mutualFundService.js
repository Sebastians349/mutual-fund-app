// src/api/mutualFundService.js

import axiosInstance from './axiosInstance';

const getSubscriptions = async () => {
  const response = await axiosInstance.get('/api/subscriptions');
  return response.data;
};

const getSubscription = async (id) => {
  const response = await axiosInstance.get(`/api/subscriptions/${id}`);
  return response.data;
};

const createSubscription = async (subscription) => {
  const response = await axiosInstance.post('/api/subscriptions', subscription);
  return response.data;
};

const updateSubscription = async (id, subscription) => {
  const response = await axiosInstance.put(`/api/subscriptions/${id}`, subscription);
  return response.data;
};

const deleteSubscription = async (id) => {
  const response = await axiosInstance.delete(`/api/subscriptions/${id}`);
  return response.data;
};

export { getSubscriptions, getSubscription, createSubscription, updateSubscription, deleteSubscription };
