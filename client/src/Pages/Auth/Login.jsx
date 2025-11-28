import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'attendee'
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    
    // Redirect based on role after successful login
    if (formData.role === 'admin') {
      navigate('/admin');
    } else if (formData.role === 'organizer') {
      navigate('/organizer');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your EventSphere account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Role Selection */}
          <div className="form-group">
            <label className="form-label">I am a</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-control"
            >
              <option value="attendee">Event Attendee</option>
              <option value="organizer">Event Organizer</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="auth-btn primary">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/auth/signup" className="auth-link">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;