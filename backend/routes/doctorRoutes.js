const express = require('express');
const Doctor = require('../models/Doctor'); // Import the Doctor model
const router = express.Router();

// Get a list of all doctors (for patients to choose from)
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();  // Fetch all doctors
    res.json(doctors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get details of a specific doctor
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id); // Find doctor by ID
    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create a new doctor profile
router.post('/create', async (req, res) => {
  const { userId, specialization, experience, clinic } = req.body;

  try {
    const newDoctor = new Doctor({
      userId,
      specialization,
      experience,
      clinic
    });

    await newDoctor.save();
    res.json(newDoctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update doctor profile
router.put('/update/:id', async (req, res) => {
  const { specialization, experience, clinic } = req.body;

  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }

    doctor.specialization = specialization || doctor.specialization;
    doctor.experience = experience || doctor.experience;
    doctor.clinic = clinic || doctor.clinic;

    await doctor.save();
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
