import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_GATEWAY_URL, // Replace with the correct base URL of your Rails server
  withCredentials: true, // Include this line to send credentials (including CSRF token)
});

export default instance;
