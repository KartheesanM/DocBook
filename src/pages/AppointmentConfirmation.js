import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/appointmentConfirmation.css';

const AppointmentConfirmation = () => {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    // Retrieve the latest appointment from localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const lastAppointment = appointments[appointments.length - 1]; // Get the latest appointment

    if (lastAppointment) {
      setAppointment(lastAppointment);
    }
  }, []);

  if (!appointment) {
    return <p>Something went wrong. No appointment data.</p>;
  }

  const { dentist, date, time } = appointment;

  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Appointment Confirmed</h2>
      <div className="confirmation-card">
        <img src={dentist.image} alt={dentist.name} className="doctor-img" />
        <div className="confirmation-info">
          <h3>{dentist.name}</h3>
          <p>{dentist.category}</p>
          <p>{dentist.location}</p>
          <br />
          <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Location:</strong> {dentist.location}, 123 S.P. Kovil</p>
        </div>
      </div>
      <button className="back-dashboard-btn" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default AppointmentConfirmation;
