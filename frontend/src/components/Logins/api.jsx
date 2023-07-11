import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Replace with the correct base URL of your Rails server
  withCredentials: true, // Include this line to send credentials (including CSRF token)
});

export default instance;