import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/bookAppointment.css';

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dentist } = location.state || {};

  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00AM – 11:00AM');
  const [age, setAge] = useState('');
  const [symptoms, setSymptoms] = useState('');

  if (!dentist) {
    return <p>No dentist selected. Please go back and select one.</p>;
  }

  // Handle appointment confirmation
  const handleConfirm = () => {
    // Checking if all fields are filled
    if (!date || !time || !age) {
      alert('Please fill all required fields!');
      return;
    }

    const appointment = {
      dentist,
      date,
      time,
      age,
      symptoms,
    };

    // Get existing appointments from localStorage or create an empty array
    const existing = JSON.parse(localStorage.getItem('appointments')) || [];

    // Push new appointment data to the existing array
    existing.push(appointment);

    // Set the updated appointments array back into localStorage
    localStorage.setItem('appointments', JSON.stringify(existing));

    // Navigate to the appointment confirmation page
    navigate('/appointment-confirmation');
  };

  return (
    <div className="appointment-container">
      <h1 className="appointment-title">Book Appointment</h1>

      {/* Dentist Information Card */}
      <div className="doctor-card">
        <img src={dentist.image} alt={dentist.name} className="doctor-img" />
        <div className="doctor-info">
          <h2>{dentist.name}</h2>
          <p>{dentist.category}</p>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="appointment-form">
        <h3>Appointment Details</h3>

        <label>Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-field"
        />

        <label>Select Time Slot</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input-field"
        />

        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter patient's age"
          className="input-field"
        />

        <label>Symptoms (Optional)</label>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe symptoms (optional)"
          className="input-field"
        />

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
