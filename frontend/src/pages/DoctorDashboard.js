import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorDashboard.css";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome, Doctor 👨‍⚕️</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card" onClick={() => navigate("/doctor-profile")}>
          View Profile
        </div>
        <div className="dashboard-card" onClick={() => navigate("/edit-profile")}>
          Edit Profile
        </div>
        <div className="dashboard-card" onClick={() => navigate("/doctor-appointments")}>
          View Appointments
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
