require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initDB } = require('./loaders/sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- MIDDLEWARE -------------------- //
// Enable CORS for your frontend (Vite dev server)
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// -------------------- ROUTES -------------------- //
// Subscriber routes
const subscriberRoutes = require('./routes/subscriber.routes');
app.use('/api/subscribers', subscriberRoutes);

// User routes
const userRoutes = require('./routes/users.routes');
app.use('/api/users', userRoutes);

// UserDetails routes
const userDetailsRoutes = require('./routes/userDetails.routes');
app.use('/api/userdetails', userDetailsRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// -------------------- START SERVER -------------------- //
const startServer = async () => {
  // Initialize DB with retries
  const dbOk = await initDB({ retries: 5, delay: 2000 });
  if (!dbOk) {
    console.error('Database initialization failed — exiting.');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
