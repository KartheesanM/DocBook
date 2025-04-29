const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  medicalHistory: {
    type: String,
    required: false
  },
  allergies: {
    type: String,
    required: false
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
