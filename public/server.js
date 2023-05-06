const express = require('express');
const app = express();
const port = 8888;

// Define a route for the login endpoint
app.post('/login', (req, res) => {
  // Handle the login logic here
  // You can access the submitted username and password using req.body
  // Perform authentication and respond accordingly
  // For example, you can send a success or failure response
  res.send('Login endpoint reached');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});