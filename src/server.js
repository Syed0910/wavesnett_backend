require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { initDB } = require("./loaders/sequelize");

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- MIDDLEWARE -------------------- //
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// -------------------- ROUTES -------------------- //
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API 🚀" });
});

// Subscribers
const subscriberRoutes = require("./routes/subscriber.routes");
app.use("/api/subscribers", subscriberRoutes);

// Users
const userRoutes = require("./routes/users.routes");
app.use("/api/users", userRoutes);

// User Details
const userDetailsRoutes = require("./routes/userDetails.routes");
app.use("/api/userdetails", userDetailsRoutes);

// Operators
const operatorRoutes = require("./routes/operators.routes");
app.use("/api/operators", operatorRoutes);

// NAS
const nasRoutes = require("./routes/nas.routes");
app.use("/api/nas", nasRoutes);

// Invoices
const invoiceRoutes = require("./routes/invoices.routes");
app.use("/api/invoices", invoiceRoutes);

// Receipts
const receiptsRoutes = require("./routes/receipts.routes");
app.use("/api/receipts", receiptsRoutes);

// Online Transactions
const onlineTransactionsRoutes = require("./routes/userpgs.routes");
app.use("/api/online-transactions", onlineTransactionsRoutes);

// ✅ Use Billbooks Routes
const billbooksRoutes = require("./routes/billbooks.routes");
app.use("/api/billbooks", billbooksRoutes);

const configsRoutes = require('./routes/configs.routes');
app.use('/api/configs', configsRoutes);

// -------------------- ERROR HANDLING -------------------- //
// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// -------------------- START SERVER -------------------- //
const startServer = async () => {
  const dbOk = await initDB({ retries: 5, delay: 2000 });
  if (!dbOk) {
    console.error("❌ Database initialization failed — exiting.");
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("❌ Failed to start server:", err);
  process.exit(1);
});
