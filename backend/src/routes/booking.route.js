const express = require("express");
const { createBooking, getBookingById } = require("../controllers/booking.controllers"); // Fixed typo

const router = express.Router();

router.post("/", createBooking); // Route for creating a new booking
router.get("/:id", getBookingById); // Route for fetching booking by ID

module.exports = router;
