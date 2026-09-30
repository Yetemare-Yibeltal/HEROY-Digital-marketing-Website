const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");
require("dotenv").config();

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const { generalLimiter } = require("./middleware/rateLimiter");
const contactRoutes = require("./routes/contactRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");

// Fail fast and loudly if required configuration is missing, rather
// than starting up in a broken state and failing mysteriously on the
// first request.
const REQUIRED_ENV_VARS = ["MONGODB_URI", "FRONTEND_URL"];
const missingEnvVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`,
  );
  process.exit(1);
}
if (!process.env.ADMIN_API_KEY) {
  console.warn(
    "Warning: ADMIN_API_KEY is not set. Admin endpoints (contact list, " +
      "consultation list, subscriber list) will be unavailable until it is configured.",
  );
}

const app = express();

// Required when running behind a reverse proxy (Render, Railway, Vercel,
// nginx, etc.) so that req.ip and rate limiting see the real client IP
// instead of the proxy's IP.
app.set("trust proxy", 1);

connectDB();

app.use(helmet());
app.use(compression());

// Support one or more comma-separated origins in FRONTEND_URL so the
// same backend can serve a production domain and a staging domain,
// for example.
const allowedOrigins = process.env.FRONTEND_URL.split(",").map((origin) =>
  origin.trim(),
);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-key"],
  }),
);

app.use("/api/", generalLimiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// Strips any request keys starting with "$" or containing "." from
// req.body, req.query, and req.params — defense in depth against
// MongoDB operator injection (e.g. ?status[$ne]=null).
app.use(mongoSanitize());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
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
app.use("/api/consultation", consultationRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    error: `Route ${req.originalUrl} not found`,
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    `HEROY API running on port ${PORT} in ${process.env.NODE_ENV} mode`,
  );
});

// Fail loudly instead of leaving the process in a silently broken
// state if a promise rejection somewhere was never caught.
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled promise rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

// Allow the process manager (Docker, Render, PM2, etc.) to shut the
// server down cleanly instead of killing it mid-request.
process.on("SIGTERM", () => {
  console.log("SIGTERM received — shutting down gracefully.");
  server.close(() => process.exit(0));
});

module.exports = app;
