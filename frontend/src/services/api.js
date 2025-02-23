import axios from 'axios';

export const getUsers = async () => {
  const response = await axios.get('http://localhost:5000/api/users');
  return response.data;
};

export const getMetrics = async () => {
  const response = await axios.get('http://localhost:5000/api/metrics');
  return response.data;
};

export const getAIInsights = async () => {
  const response = await axios.get('http://localhost:5000/api/ai-insights');
  return response.data;
};

export const addUser = async (user) => {
  await axios.post('http://localhost:5000/api/users', user);
};
