import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PatientDashboard.css';

const doctors = [
  { id: 1, name: 'Dr. Riya Mehra', category: 'Dentist', image: '/images/doctor1.png' },
  { id: 2, name: 'Dr. Arjun Singh', category: 'Dentist', image: '/images/doctor2.png' },
  { id: 3, name: 'Dr. Kavya S.', category: 'Dentist', image: '/images/doctor3.png' },
  { id: 4, name: 'Dr. Naveen', category: 'Cardiologist', image: '/images/doctor4.png' },
  { id: 5, name: 'Dr. Rakesh Kumar', category: 'Dermatologist', image: '/images/doctor5.png' }
];

const PatientDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(stored);
  }, []);

  const handleCategoryClick = (category) => {
    if (category.toLowerCase() === 'dentist') {
      navigate('/dentists');
    } else {
      navigate(`/doctors/${category.toLowerCase()}`);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate('/');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDoctorClick = (doctor) => {
    navigate('/book-appointment', { state: { dentist: doctor } });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <h1>Welcome, Patient 👋</h1>
        <div className="profile-menu">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-image"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="profile-dropdown">
              <a href="/profile">View Profile</a>
              <a href="#" onClick={handleLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by doctor or category..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Categories */}
      <div className="categories-section">
        <h2 className="section-title">Categories</h2>
        <div className="categories-grid">
          {['Dentist', 'Cardiologist', 'Dermatologist'].map((category, idx) => (
            <div
              key={idx}
              className="card"
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={`/icons/${category.toLowerCase()}.png`}
                alt={category}
                className="card-icon"
              />
              <div className="card-title">{category}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {searchQuery && filteredDoctors.length > 0 && (
        <div className="categories-section">
          <h2 className="section-title">Search Results</h2>
          <div className="categories-grid">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="card"
                onClick={() => handleDoctorClick(doctor)}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="card-icon"
                />
                <div className="card-title">{doctor.name}</div>
                <div className="card-subtitle">{doctor.category}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="quick-actions-section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="quick-actions-grid">
          <div className="card" onClick={() => navigate('/book-appointment')}>
            <div className="card-title">Book Appointment</div>
          </div>
          <div className="card" onClick={() => setShowHistory(true)}>
            <div className="card-title">View History</div>
          </div>
          <div className="card">
            <div className="card-title">Consult Online</div>
          </div>
        </div>
      </div>

      {/* Appointment History */}
      {showHistory && (
        <div className="appointment-history">
          <h2>Appointment History</h2>
          {appointments.length > 0 ? (
            appointments.map((a, index) => (
              <div key={index} className="appointment-card">
                <h3>{a.dentist.name}</h3>
                <p><strong>Date:</strong> {a.date}</p>
                <p><strong>Time:</strong> {a.time}</p>
                <p><strong>Age:</strong> {a.age}</p>
                <p><strong>Symptoms:</strong> {a.symptoms}</p>
              </div>
            ))
          ) : (
            <p>No appointments booked.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
