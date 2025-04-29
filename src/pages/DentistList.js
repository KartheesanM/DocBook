import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DentistList.css';

const dentists = [
  { id: 1, name: 'Dr. Riya Mehra', category: 'Dentist', image: '/images/doctor1.png' },
  { id: 2, name: 'Dr. Arjun Singh', category: 'Dentist', image: '/images/doctor2.png' },
  { id: 3, name: 'Dr. Kavya S.', category: 'Dentist', image: '/images/doctor3.png' }
];

const DentistList = () => {
  const navigate = useNavigate();

  const handleBookAppointment = (dentist) => {
    navigate('/book-appointment', { state: { dentist } });
  };

  return (
    <div className="dentist-list-container">
      <div className="dentist-list-header">
        <h1>Choose Your Dentist</h1>
      </div>
      <div className="dentist-list">
        {dentists.map((dentist) => (
          <div key={dentist.id} className="dentist-card" onClick={() => handleBookAppointment(dentist)}>
            <img src={dentist.image} alt={dentist.name} />
            <div className="dentist-card-title">{dentist.name}</div>
            <div className="dentist-card-category">{dentist.category}</div>
            <button className="dentist-card-button">Book Appointment</button>
          </div>
        ))}
      </div>
      <div className="dentist-list-footer">
        <p>Select your dentist and book an appointment.</p>
      </div>
    </div>
  );
};

export default DentistList;
