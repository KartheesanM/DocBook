import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import DentistList from './pages/DentistList';
import BookAppointment from './pages/BookAppointment';
import AppointmentConfirmation from './pages/AppointmentConfirmation';
import EditProfile from './pages/EditProfile';
import ViewAppointments from './pages/ViewAppointment';
import AuthPage from './components/AuthPage';  // Import AuthPage for login/register

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AuthPage />} /> {/* AuthPage for Login/Register */}
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/dentists" element={<DentistList />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/view-appointments" element={<ViewAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;
