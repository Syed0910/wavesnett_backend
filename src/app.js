const express = require('express');
const app = express();

app.use(express.json());

module.exports = app;
// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
