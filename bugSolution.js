const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... (rest of the code to handle valid userId) ...
  // Example: Fetch user data using the valid userId
  // ...
});