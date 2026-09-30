const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const { generalLimiter, chatLimiter } = require("./middleware/rateLimiter");
const contactRoutes = require("./routes/contactRoutes");
const chatRoutes = require("./routes/chatRoutes");
const consultationRoutes = require("./routes/consultationRoutes");

const app = express();

connectDB();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-key"],
  }),
);

app.use("/api/", generalLimiter);
app.use("/api/chat", chatLimiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "HEROY API is running",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/consultation", consultationRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    error: `Route ${req.originalUrl} not found`,
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `HEROY API running on port ${PORT} in ${process.env.NODE_ENV} mode`,
  );
});

module.exports = app;
