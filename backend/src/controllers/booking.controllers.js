const Booking = require("../models/booking.model");

// POST: Create a new booking
const createBooking = async (req, res) => {
  try {
    const { name, email, date, time, guests } = req.body;

    // Check if a booking already exists at the same date and time
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ error: "This time slot is already booked" });
    }

    const newBooking = new Booking({ name, email, date, time, guests });
    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};

// GET: Fetch a booking by ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch booking" });
  }
};

module.exports = {
  createBooking,
  getBookingById,
};
