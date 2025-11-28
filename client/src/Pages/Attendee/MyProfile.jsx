// import React from 'react'

// const MyProfile = () => {
//   return (
//     <div>MyProfile</div>
//   )
// }

// export default MyProfile
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes, FaCamera } from 'react-icons/fa';
// import './Profile.css';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    bio: 'Passionate event enthusiast who loves attending tech conferences and music festivals.',
    joinDate: 'January 2023'
  });

  const [tempData, setTempData] = useState({ ...userData });

  const handleEdit = () => {
    setTempData({ ...userData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...userData });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const stats = [
    { label: 'Events Attended', value: '24' },
    { label: 'Tickets Purchased', value: '32' },
    { label: 'Reviews Written', value: '18' },
    { label: 'Member Since', value: '2023' }
  ];

  const recentEvents = [
    {
      id: 1,
      name: 'Tech Conference 2024',
      date: '2024-03-15',
      type: 'Conference',
      status: 'Attended'
    },
    {
      id: 2,
      name: 'Summer Music Festival',
      date: '2024-06-22',
      type: 'Festival',
      status: 'Upcoming'
    },
    {
      id: 3,
      name: 'Startup Networking',
      date: '2024-02-10',
      type: 'Networking',
      status: 'Attended'
    }
  ];

  return (
    <div className="profile-page">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">My Profile</h1>
            <p className="page-subtitle">Manage your personal information and preferences</p>
          </div>
        </div>

        <div className="row">
          {/* Left Column - Profile Info */}
          <div className="col-lg-4 mb-4">
            <div className="profile-card">
              <div className="profile-header text-center">
                <div className="profile-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                    alt="Profile" 
                    className="profile-image"
                  />
                  <button className="edit-image-btn">
                    <FaCamera />
                  </button>
                </div>
                <h3 className="profile-name">{userData.name}</h3>
                <p className="profile-join-date">Member since {userData.joinDate}</p>
              </div>

              {/* Stats */}
              <div className="profile-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Edit Form */}
          <div className="col-lg-8">
            <div className="profile-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>Personal Information</h4>
                {!isEditing ? (
                  <button className="btn btn-primary" onClick={handleEdit}>
                    <FaEdit className="me-2" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={handleSave}>
                      <FaSave className="me-2" />
                      Save Changes
                    </button>
                    <button className="btn btn-outline-secondary" onClick={handleCancel}>
                      <FaTimes className="me-2" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <FaUser className="me-2" />
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={tempData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                    ) : (
                      <div className="profile-field-value">{userData.name}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <FaEnvelope className="me-2" />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        className="form-control"
                        value={tempData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    ) : (
                      <div className="profile-field-value">{userData.email}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <FaPhone className="me-2" />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        className="form-control"
                        value={tempData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    ) : (
                      <div className="profile-field-value">{userData.phone}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      <FaMapMarkerAlt className="me-2" />
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={tempData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                      />
                    ) : (
                      <div className="profile-field-value">{userData.location}</div>
                    )}
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label">Bio</label>
                    {isEditing ? (
                      <textarea
                        className="form-control"
                        rows="4"
                        value={tempData.bio}
                        onChange={(e) => handleChange('bio', e.target.value)}
                      />
                    ) : (
                      <div className="profile-field-value">{userData.bio}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Events */}
            <div className="profile-card mt-4">
              <h4 className="card-header">Recent Events</h4>
              <div className="card-body">
                <div className="recent-events">
                  {recentEvents.map(event => (
                    <div key={event.id} className="recent-event-item">
                      <div className="event-info">
                        <h6 className="event-name">{event.name}</h6>
                        <div className="event-meta">
                          <span className="event-type">{event.type}</span>
                          <span className="event-date">{event.date}</span>
                        </div>
                      </div>
                      <div className={`event-status ${event.status.toLowerCase()}`}>
                        {event.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;