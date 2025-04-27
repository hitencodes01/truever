// Import required modules
const express = require('express');
const cors = require('cors');

// Create an Express app
const app = express();

const cors = require('cors');
app.use(cors());  // Enable CORS for all origins

// Use CORS middleware to allow requests from other origins (like React)
app.use(cors());

// Middleware to parse JSON bodies from POST requests
app.use(express.json());

// Basic route to test the server
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Example POST route for Sign Up (you can add your logic here)
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  // Handle sign-up logic, such as saving the user to the database
  res.json({ success: true, message: 'User registered successfully' });
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server running on port 5000');
});


