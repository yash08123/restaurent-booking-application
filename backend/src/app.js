const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Import MongoDB connection
const bookingRoutes = require("./routes/booking.route"); // Import routes

dotenv.config(); // Load environment variables

// Initialize the app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Replace with your frontend URL
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes); // Prefix all booking routes with `/api/bookings`

// Global Error Handling (Optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
