import React from "react";
import '../styles/DoctorProfile.css';

const doctorData = {
  name: "Dr. Arjun Singh",
  email: "arjun.dentist@example.com",
  specialization: "Pediatric Dentist",
  experience: "5 years",
  phone: "+91 9876543210",
  location: "Mumbai",
  qualifications: "BDS, MDS",
  clinic: "SmileCare Dental Clinic"
};

const DoctorProfile = () => {
  return (
    <div className="doctor-profile-container">
      <h2>Doctor Profile</h2>
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/100"
          alt="Doctor"
          className="profile-img"
        />
        <div className="profile-info">
          <p><strong>Name:</strong> {doctorData.name}</p>
          <p><strong>Email:</strong> {doctorData.email}</p>
          <p><strong>Phone:</strong> {doctorData.phone}</p>
          <p><strong>Specialization:</strong> {doctorData.specialization}</p>
          <p><strong>Experience:</strong> {doctorData.experience}</p>
          <p><strong>Qualifications:</strong> {doctorData.qualifications}</p>
          <p><strong>Clinic:</strong> {doctorData.clinic}</p>
          <p><strong>Location:</strong> {doctorData.location}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
