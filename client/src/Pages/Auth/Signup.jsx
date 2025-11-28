import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'attendee',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
    
    // Redirect based on role after successful signup
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
          <h2>Join EventSphere</h2>
          <p>Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Role Selection */}
          <div className="form-group">
            <label className="form-label">I want to join as a</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-control"
            >
              <option value="attendee">Select Role</option>
              <option value="attendee">Event Attendee</option>
              <option value="organizer">Event Organizer</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-group">
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
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Create a password"
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

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="form-group">
            <label className="checkbox-label full-width">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <span>
                I agree to the{' '}
                <Link to="/terms" className="inline-link">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="inline-link">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="auth-btn primary">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/auth/login" className="auth-link">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;