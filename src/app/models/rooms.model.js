const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomType: {
    type: String,
    required: true,
    enum: ['Single Room', 'Double Room', 'Suite Room', 'Family Room'], // Example room types
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    
  },
  availability: {
    type: Boolean,
    required: true,
    default: true,
  },
  image: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Room = mongoose.models.Rooms || mongoose.model("Rooms",roomSchema);

export default Room;
