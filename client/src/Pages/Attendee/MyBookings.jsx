
import React, { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt,  FaDownload, FaEye, FaStar, FaReceipt  } from 'react-icons/fa';
// import './MyBookings.css';
import '../pagecss.css'

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      {
        id: 1,
        eventName: 'Tech Conference 2024',
        date: '2024-03-15',
        time: '9:00 AM - 5:00 PM',
        location: 'Convention Center, New York',
        ticketType: 'VIP Pass',
        ticketId: 'TC2024-VIP-001',
        price: '$299',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop'
      },
      {
        id: 2,
        eventName: 'Summer Music Festival',
        date: '2024-06-22',
        time: '2:00 PM - 11:00 PM',
        location: 'Central Park, New York',
        ticketType: 'General Admission',
        ticketId: 'SMF2024-GA-045',
        price: '$89',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&h=200&fit=crop'
      }
    ],
    past: [
      {
        id: 3,
        eventName: 'Startup Networking Event',
        date: '2024-01-20',
        time: '6:00 PM - 9:00 PM',
        location: 'Tech Hub, Brooklyn',
        ticketType: 'Standard',
        ticketId: 'SN2024-ST-012',
        price: '$45',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop',
        canReview: true
      },
      {
        id: 4,
        eventName: 'Art Exhibition Opening',
        date: '2023-11-15',
        time: '5:00 PM - 8:00 PM',
        location: 'Modern Art Museum',
        ticketType: 'Early Bird',
        ticketId: 'AE2023-EB-007',
        price: '$35',
        image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=200&fit=crop'
      }
    ],
    cancelled: [
      {
        id: 5,
        eventName: 'Food & Wine Festival',
        date: '2024-02-10',
        time: '12:00 PM - 8:00 PM',
        location: 'Downtown Plaza',
        ticketType: 'Tasting Pass',
        ticketId: 'FW2024-TP-023',
        price: '$75',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop',
        refundStatus: 'Processing'
      }
    ]
  };

  const BookingCard = ({ booking, type }) => (
    <div className="booking-card">
      <div className="booking-image">
        <img src={booking.image} alt={booking.eventName} />
      </div>
      <div className="booking-content">
        <div className="booking-header">
          <h5 className="event-name">{booking.eventName}</h5>
          <span className={`booking-status ${type}`}>{type}</span>
        </div>
        
        <div className="booking-details">
          <div className="detail-item">
            <FaCalendar className="icon" />
            <span>{booking.date} • {booking.time}</span>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt className="icon" />
            <span>{booking.location}</span>
          </div>
          <div className="detail-item">
            <FaReceipt className="icon" />
            <span>{booking.ticketType} • {booking.ticketId}</span>
          </div>
        </div>

        <div className="booking-footer">
          <div className="booking-price">
            <strong>{booking.price}</strong>
          </div>
          <div className="booking-actions">
            {type === 'upcoming' && (
              <>
                <button className="btn btn-outline-primary btn-sm">
                  <FaDownload className="me-1" />
                  Ticket
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  <FaEye className="me-1" />
                  Details
                </button>
              </>
            )}
            {type === 'past' && booking.canReview && (
              <button className="btn btn-primary btn-sm">
                <FaStar className="me-1" />
                Write Review
              </button>
            )}
            {type === 'cancelled' && (
              <span className="refund-status">{booking.refundStatus}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-bookings-page">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">My Bookings</h1>
            <p className="page-subtitle">Manage your event tickets and reservations</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bookings-tabs">
          <div className="tabs-header">
            {[
              { key: 'upcoming', label: 'Upcoming', count: bookings.upcoming.length },
              { key: 'past', label: 'Past Events', count: bookings.past.length },
              { key: 'cancelled', label: 'Cancelled', count: bookings.cancelled.length }
            ].map(tab => (
              <button
                key={tab.key}
                className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {bookings[activeTab].length > 0 ? (
              <div className="bookings-grid">
                {bookings[activeTab].map(booking => (
                  <BookingCard key={booking.id} booking={booking} type={activeTab} />
                ))}
              </div>
            ) : (
              <div className="no-bookings">
                <h4>No {activeTab} bookings found</h4>
                <p>When you book events, they will appear here.</p>
                <button className="btn btn-primary">Browse Events</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;