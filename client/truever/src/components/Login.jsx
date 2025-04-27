import React, { useState } from 'react';
import SignUp from './SignUp';  // Import the SignUp component
import UserDashboard from './UserDashboard';  // Import your new user interface after login

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle between forms
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in

  const handleToggleForm = () => {
    setShowSignUp(!showSignUp); // Toggle form display
  };

  // Login form logic
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (result.success) {
        setIsLoggedIn(true); // Set logged-in state to true
        console.log('Login successful!');
      } else {
        console.log('Invalid credentials!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {isLoggedIn ? (
          // Show the User Dashboard after login
          <UserDashboard />
        ) : showSignUp ? (
          // Show SignUp component if toggled
          <SignUp />
        ) : (
          // Show Login form if not logged in and not on SignUp page
          <>
            <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Log In</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              >
                Log In
              </button>
            </form>

            <p className="mt-4 text-center text-blue-600 cursor-pointer" onClick={handleToggleForm}>
              Don't have an account? Sign Up
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
