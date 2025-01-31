/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { registerUser, loginUser } from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for JWT token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally, verify token or fetch user info using the token
      // For now, we'll assume the token is valid and extract user info
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  // Register a user and store JWT token
  const register = async (credentials) => {
    try {
      const response = await registerUser(credentials);
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // Store user data
      setUser(user);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // Log in a user and store JWT token
  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // Store user data
      setUser(user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Log out and remove JWT token and user data
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;