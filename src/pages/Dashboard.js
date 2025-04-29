// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data from localStorage or your API
    const userToken = localStorage.getItem('token');
    if (userToken) {
      // Decode the token or fetch user data based on token
      setUser({ name: 'Dr. Arjun Singh', role: 'doctor' });  // Example
    }
  }, []);

  return (
    <div>
      <h2>Welcome to Your Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your role: {user.role}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
