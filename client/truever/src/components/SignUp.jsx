import React, { useState } from 'react';

const SignUp = () => {
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userData = { name, email, password };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage('Sign Up successful!');
      } else {
        setMessage('Sign Up failed, try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error during Sign Up, please try again.');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Sign Up</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

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

      <div className="mb-6">
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
        Sign Up
      </button>

      {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
    </form>
  );
};

export default SignUp;
