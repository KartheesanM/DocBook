const express = require('express');
const Patient = require('../models/Patient'); // Import the Patient model
const router = express.Router();

// Get a list of all patients (for admin or doctors)
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();  // Fetch all patients
    res.json(patients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get details of a specific patient
router.get('/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id); // Find patient by ID
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create a new patient profile
router.post('/create', async (req, res) => {
  const { userId, medicalHistory, allergies } = req.body;

  try {
    const newPatient = new Patient({
      userId,
      medicalHistory,
      allergies
    });

    await newPatient.save();
    res.json(newPatient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update patient profile
router.put('/update/:id', async (req, res) => {
  const { medicalHistory, allergies } = req.body;

  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }

    patient.medicalHistory = medicalHistory || patient.medicalHistory;
    patient.allergies = allergies || patient.allergies;

    await patient.save();
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
