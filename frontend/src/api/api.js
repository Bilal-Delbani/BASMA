import axios from "axios";

const API_URL = "http://localhost:8000/api";
axios.defaults.baseURL = API_URL; // Backend URL
axios.defaults.withCredentials = false;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; // For AJAX requests

// API Methods
export const registerUser = async (userData) => {
  try {
    // Registering user - CSRF token not needed for JWT
    return await axios.post("/register", userData);
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    // Login and receive JWT token
    const response = await axios.post("/login", credentials);
    const { token } = response.data;  // Assuming the token is returned in the response

    // Store token in localStorage
    localStorage.setItem("jwtToken", token);

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export const trackClick = async (clickData) => {
  try {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem("jwtToken");

    // Make request with JWT token in Authorization header
    return await axios.post("/click", clickData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Click Tracking Error:", error);
    throw error;
  }
};

export const fetchAnalytics = async () => {
  try {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem("jwtToken");

    // Make request with JWT token in Authorization header
    return await axios.get("/analytics", {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Analytics Fetch Error:", error);
    throw error;
  }
};
