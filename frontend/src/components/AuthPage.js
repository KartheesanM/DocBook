// src/components/AuthPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';

const AuthPage = ({ isLogin: initialMode = true }) => {
  const [isLogin, setIsLogin] = useState(initialMode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient'
  });

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const endpoint = isLogin ? 'login' : 'register';
    const data = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, data);
      localStorage.setItem('token', response.data.token);
      alert('Success!');
      // TODO: redirect based on role
    } catch (error) {
      console.error('Auth error:', error);
      alert('Authentication failed.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-logo">MedAppoint</h1>
        <div className="toggle-buttons">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <div className="auth-form">
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
