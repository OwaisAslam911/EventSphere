// import React from 'react'

// const AllEvents = () => {
//   return (
//     <div>AllEvents</div>
//   )
// }

// export default AllEvents
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaCalendar, FaMapMarkerAlt, FaUsers, FaHeart, FaRegHeart } from 'react-icons/fa';
// import './AttendeePages.css';

const AllEvents = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'tech', name: 'Technology' },
    { id: 'music', name: 'Music' },
    { id: 'business', name: 'Business' },
    { id: 'science', name: 'Science' },
    { id: 'arts', name: 'Arts & Culture' },
    { id: 'sports', name: 'Sports' },
    { id: 'food', name: 'Food & Drink' }
  ];

  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      category: "tech",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Convention Center, New York",
      price: "$199",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      attendees: 1200,
      organizer: "Tech Events Inc"
    },
    {
      id: 2,
      title: "Jazz Music Festival",
      category: "music",
      date: "2024-04-20",
      time: "06:00 PM",
      location: "Central Park, NYC",
      price: "Free",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      attendees: 5000,
      organizer: "NYC Music Society"
    },
    {
      id: 3,
      title: "Startup Networking Mixer",
      category: "business",
      date: "2024-03-08",
      time: "07:00 PM",
      location: "Innovation Hub, Brooklyn",
      price: "$49",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      attendees: 300,
      organizer: "Startup Network"
    },
    {
      id: 4,
      title: "Science & Innovation Expo",
      category: "science",
      date: "2024-05-10",
      time: "10:00 AM",
      location: "Science Museum, Boston",
      price: "$25",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
      attendees: 2000,
      organizer: "Science Foundation"
    },
    {
      id: 5,
      title: "Art Gallery Opening",
      category: "arts",
      date: "2024-03-22",
      time: "06:30 PM",
      location: "Modern Art Gallery, Chicago",
      price: "Free",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=250&fit=crop",
      attendees: 150,
      organizer: "Art Collective"
    },
    {
      id: 6,
      title: "Food & Wine Festival",
      category: "food",
      date: "2024-04-05",
      time: "12:00 PM",
      location: "Waterfront Park, San Francisco",
      price: "$75",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop",
      attendees: 3000,
      organizer: "Foodie Events"
    }
  ];

  const toggleFavorite = (eventId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(eventId)) {
      newFavorites.delete(eventId);
    } else {
      newFavorites.add(eventId);
    }
    setFavorites(newFavorites);
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeFilter === 'all' || event.category === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="events-page">
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="page-title">Discover Events</h1>
            <p className="page-subtitle">Find your next unforgettable experience</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search events by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="category-filters">
              <div className="filters-header">
                <FaFilter className="me-2" />
                <span>Filter by Category</span>
              </div>
              <div className="filters-container">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="row">
          <div className="col-12">
            <div className="events-count mb-3">
              <span className="text-muted">
                Showing {filteredEvents.length} of {events.length} events
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                <div className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <button 
                      className="favorite-btn"
                      onClick={() => toggleFavorite(event.id)}
                    >
                      {favorites.has(event.id) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <div className="event-category">{event.category}</div>
                  </div>
                  
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    
                    <div className="event-details">
                      <div className="event-detail">
                        <FaCalendar className="detail-icon" />
                        <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                      </div>
                      <div className="event-detail">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>{event.location}</span>
                      </div>
                      <div className="event-detail">
                        <FaUsers className="detail-icon" />
                        <span>{event.attendees.toLocaleString()} attendees</span>
                      </div>
                    </div>

                    <div className="event-footer">
                      <div className="event-price">{event.price}</div>
                      <div className="event-actions">
                        <button className="btn btn-outline-primary btn-sm me-2">
                          View Details
                        </button>
                        <button className="btn btn-primary btn-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="no-events text-center py-5">
                <h4>No events found</h4>
                <p className="text-muted">Try adjusting your search or filters</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;