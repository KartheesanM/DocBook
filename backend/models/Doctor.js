const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number, // years of experience
    required: true
  },
  clinic: {
    type: String,
    required: false
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
