// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { initDB } = require("./loaders/sequelize");

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- MIDDLEWARE -------------------- //
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://localhost:3000"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// -------------------- ROOT TEST ROUTE -------------------- //
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    version: "1.0.0",
    endpoints: {
      configs: "/api/configs",
      subscribers: "/api/subscribers",
      users: "/api/users",
      newuser: "/api/newuser",
      userdetails: "/api/userdetails",
      operators: "/api/operators",
      nas: "/api/nas",
      plans: "/api/plans",
      invoices: "/api/invoices",
      receipts: "/api/receipts",
      onlineTransactions: "/api/online-transactions",
      billbooks: "/api/billbooks"
    },
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// -------------------- ROUTES -------------------- //

// Users 
const userRoutes = require("./routes/users.routes");
app.use("/api/users", userRoutes);

// New User routes
const newUserRoutes = require("./routes/newuser.routes");
app.use("/api/newuser", newUserRoutes);

// Subscribers
const subscriberRoutes = require("./routes/subscriber.routes");
app.use("/api/subscribers", subscriberRoutes);

// User Details
const userDetailsRoutes = require("./routes/userDetails.routes");
app.use("/api/userdetails", userDetailsRoutes);

// Operators
const operatorRoutes = require("./routes/operators.routes");
app.use("/api/operators", operatorRoutes);

// NAS
const nasRoutes = require("./routes/nas.routes");
app.use("/api/nas", nasRoutes);

// Plans
const planRoutes = require("./routes/plans.routes");
app.use("/api/plans", planRoutes);

// Invoices
const invoiceRoutes = require("./routes/invoices.routes");
app.use("/api/invoices", invoiceRoutes);

// Receipts
const receiptsRoutes = require("./routes/receipts.routes");
app.use("/api/receipts", receiptsRoutes);

// Online Transactions
const onlineTransactionsRoutes = require("./routes/userpgs.routes");
app.use("/api/online-transactions", onlineTransactionsRoutes);

// Billbooks
const billbooksRoutes = require("./routes/billbooks.routes");
app.use("/api/billbooks", billbooksRoutes);

// Configs
const configsRoutes = require("./routes/configs.routes");
app.use("/api/configs", configsRoutes);

// Bulk User Lots
const bulkLotsRoutes = require("./routes/bulkLots.routes");
app.use("/api/bulk-lots", bulkLotsRoutes);

// Reports
const reportsRoutes = require("./routes/reports.routes");
app.use("/api/reports", reportsRoutes);

// Recharges
const rechargeRoutes = require("./routes/recharges.routes");
app.use("/api/recharges", rechargeRoutes);

// Ott routes
const ottRoutes = require("./routes/otts.routes");
app.use("/api/otts", ottRoutes);

// Email templates
const emailTemplateRoutes = require("./routes/emailtemplates.routes");
app.use("/api/emailtemplates", emailTemplateRoutes);

// Radpostauth (Connection Attempts)
const radpostauthRoutes = require("./routes/radpostauth.routes");
app.use("/api/connection-attempts", radpostauthRoutes);

// Active Records
const activeRecordsRoutes = require("./routes/activeRecords.routes");
app.use("/api/active-records", activeRecordsRoutes);

// Zone Ledgers
const zoneLedgersRoutes = require("./routes/zoneledgers.routes");
app.use("/api/zoneledgers", zoneLedgersRoutes);

// Walletledgers
console.log("Loading Walletledgers route...");
const walletledgersRoutes = require("./routes/walletledgers.routes");
app.use("/api/walletledgers", walletledgersRoutes);

const invoiceUserpgRoutes = require('./routes/invoiceUserpgRoutes');
app.use('/api/tax-summary', invoiceUserpgRoutes);



// -------------------- ERROR HANDLING -------------------- //
// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    error: "Route not found",
    message: `Cannot ${req.method} ${req.path}`,
    availableRoutes: [
      "GET /",
      "GET /health",
      "GET /api/configs",
      "GET /api/subscribers",
      "GET /api/users",
      "POST /api/users",
      "POST /api/newuser",
      "GET /api/newuser/plans",
      "GET /api/newuser/nas",
      "GET /api/newuser/plangroups", 
      "GET /api/newuser/zones",
      "GET /api/users/data/plans",
      "GET /api/users/data/nas",
      "GET /api/users/data/plangroups",
      "GET /api/users/data/zones",
      "GET /api/userdetails",
      "GET /api/operators",
      "GET /api/nas",
      "GET /api/plans",
      "GET /api/invoices",
      "GET /api/receipts",
      "GET /api/online-transactions",
      "GET /api/billbooks",
      "GET /api/tax-summary"
    ]
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      error: "Validation Error",
      message: err.message,
      details: err.errors || [],
    });
  }

  if (err.name === "SequelizeConnectionError") {
    return res.status(503).json({
      error: "Database Connection Error",
      message: "Unable to connect to the database",
    });
  }

  if (err.name === "SyntaxError" && err.message.includes("JSON")) {
    return res.status(400).json({
      error: "Invalid JSON",
      message: "Request body contains invalid JSON",
    });
  }

  res.status(500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "production"
        ? "Something went wrong!"
        : err.message,
    timestamp: new Date().toISOString(),
  });
});

// -------------------- START SERVER -------------------- //
const startServer = async () => {
  try {
    console.log("Initializing database connection...");
    const dbOk = await initDB({ retries: 5, delay: 2000 });

    if (!dbOk) {
      console.error("Database initialization failed – exiting.");
      process.exit(1);
    }

    console.log("Database connection established successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`Users API: http://localhost:${PORT}/api/users`);
      console.log(`New User API: http://localhost:${PORT}/api/newuser`);
      console.log(`Create User: POST http://localhost:${PORT}/api/newuser`);
      console.log(`Get Plans: http://localhost:${PORT}/api/newuser/plans`);
      console.log(`Get NAS: http://localhost:${PORT}/api/newuser/nas`);
      console.log(`Get Plan Groups: http://localhost:${PORT}/api/newuser/plangroups`);
      console.log(`Get Zones: http://localhost:${PORT}/api/newuser/zones`);
      console.log("Server is ready to accept requests!");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  process.exit(0);
});

// Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});