// src/pages/EditProfile.js
import React, { useState } from 'react';
import '../styles/EditProfile.css'; // Adjusted the import path

const EditProfile = () => {
  // State to store the profile details
  const [formData, setFormData] = useState({
    name: 'Dr. Arjun Singh',
    email: 'arjun.dentist@example.com',
    phone: '+91 9876543210',
    specialization: 'Pediatric Dentist',
    experience: '5 years',
    qualifications: 'BDS, MDS',
    clinic: 'SmileCare Dental Clinic',
    location: 'Mumbai',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // You would typically save the updated profile data to localStorage or an API
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            placeholder="Enter your specialization"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Enter your experience"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="qualifications">Qualifications</label>
          <input
            type="text"
            id="qualifications"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            placeholder="Enter your qualifications"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clinic">Clinic</label>
          <input
            type="text"
            id="clinic"
            name="clinic"
            value={formData.clinic}
            onChange={handleChange}
            placeholder="Enter your clinic name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
