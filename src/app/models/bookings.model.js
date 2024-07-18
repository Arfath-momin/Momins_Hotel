const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  countryOfOrigin: {
    type: String,
    required: true,
  },
  townCity: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Please fill a valid phone number'], // Example validation for a 10-digit number
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'], // Email validation
  },
 roomId:
 {
  type: Number,
  required: true,
 },
 
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalNights:
  {
    type: Number,
    required: true,
  },
  totalPrice:
  {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const Booking = mongoose.models.Bookings || mongoose.model('Bookings', bookingSchema);

export default Booking;
