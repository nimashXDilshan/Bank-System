import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  // Import useLocation
import api from '../api/apiClient';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nic, setNic] = useState('');  // Add state for NIC
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');  // Add state for success message
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();  // Get location from React Router

  // Get role from location state
  const {role} = location.state || {};  // Retrieve role from state or set to undefined if not found

  useEffect(() => {
    //If no role is passed, redirect to the role selection page
    if (!role) {
      navigate('/whoareyou');
    }
  }, [role, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Both fields are required!');
      setSuccessMessage('');  // Reset success message on error
      return;
      
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setSuccessMessage('');  // Reset success message on error
      return;
    }

    try {
      const loginData = {username, password,nic,role };

      // Add NIC if the role is 'Customer'
      if (role === 'Customer' && nic === '') {
        setError('NIC is required for Customer!');
        return;
      }

      // Include NIC in the login data if the role is Customer
      if (role === 'Customer') {
        loginData.nic = nic;
        loginData.role=role;
      }
      else if(role === 'Employee' || role === 'Manager') {
        loginData.role=role;
      }
      


      const response = await api.post('/auth/login', loginData);
      // Handle successful login
      console.log('Login successful:', response.data);
      console.log('Login successful:', response.data.token);
      setError('');
      setSuccessMessage('Login successful! Redirecting...');  // Set success message
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      
      // Redirect to the /myaccounts page after successful login
      setTimeout(() => navigate('/myaccounts'), 500); // Redirect after 2 seconds (show success message first)
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        setError(error.response.data.message || 'An error occurred. Please try again later.');
      } else if (error.request) {
        setError('No response received from the server. Please check your network connection.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
      setSuccessMessage('');  // Reset success message on error
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-blue-800">Login</h2>

        {error && <p className="mb-4 text-sm text-center text-red-500">{error}</p>}
        {successMessage && <p className="mb-4 text-sm text-center text-green-500">{successMessage}</p>} {/* Show success message */}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute text-gray-600 transform -translate-y-1/2 right-3 top-1/2"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Conditionally render NIC input for Customer role */}
          {role === 'Customer' && (
            <div className="mb-4">
              <label htmlFor="nic" className="block text-sm font-medium text-gray-700">
                NIC
              </label>
              <input
                type="text"
                id="nic"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
