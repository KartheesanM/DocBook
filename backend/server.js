const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); 
const appointmentRoutes = require('./routes/appointmentRoutes');  // Import the appointment routes
const doctorRoutes = require('./routes/doctorRoutes');  // Import doctor routes
const patientRoutes = require('./routes/patientRoutes');  // Import patient routes

dotenv.config(); // Load environment variables before any DB connection or JWT usage

const app = express();

// Middleware
app.use(express.json());  // Middleware to parse incoming JSON requests
app.use(cors());          // Enable CORS for cross-origin requests

// Register Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/doctors', doctorRoutes);  // Doctor routes

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Exit the process if MongoDB connection fails
  });

// Basic test route
app.get('/', (req, res) => {
  res.send('Server is running and MongoDB is connected!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
