// src/pages/ViewAppointments.js
import React, { useState, useEffect } from 'react';

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Load appointments from local storage
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  return (
    <div className="appointments-container">
      <h2>View Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <ul className="appointments-list">
          {appointments.map((appointment, index) => (
            <li key={index} className="appointment-item">
              <div>
                <strong>Doctor:</strong> {appointment.doctorName}
              </div>
              <div>
                <strong>Date:</strong> {appointment.date}
              </div>
              <div>
                <strong>Time:</strong> {appointment.time}
              </div>
              <div>
                <strong>Symptoms:</strong> {appointment.symptoms}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewAppointments;
