const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Endpoint to handle POST requests
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received!', data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
