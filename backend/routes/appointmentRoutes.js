const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Create a new appointment
router.post('/create', async (req, res) => {
  const { patientId, doctorId, date, symptoms } = req.body;
  try {
    const newAppointment = new Appointment({ patientId, doctorId, date, symptoms });
    await newAppointment.save();
    res.json(newAppointment);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all appointments for a specific patient
router.get('/patient/:patientId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.patientId });
    res.json(appointments);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
