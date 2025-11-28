import React from 'react';
import { FaUsers, FaRocket, FaEye, FaHeart, FaAward, FaHandshake } from 'react-icons/fa';
// import './AboutUs.css';
import '../pagecss.css'

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Passionate about connecting people through memorable events."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Tech enthusiast building the future of event management."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Events",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Creating unforgettable experiences for our community."
    }
  ];

  const values = [
    {
      icon: <FaUsers />,
      title: "Community First",
      description: "We believe in building strong communities through shared experiences."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge event solutions."
    },
    {
      icon: <FaEye />,
      title: "Transparency",
      description: "Honest and open communication with all our partners and attendees."
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Driven by our love for creating memorable event experiences."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Events Hosted" },
    { number: "2M+", label: "Happy Attendees" },
    { number: "500+", label: "Event Organizers" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About EventSphere</h1>
              <p className="lead mb-4">
                We're revolutionizing the way people discover, book, and experience events. 
                From intimate gatherings to large-scale conferences, we connect passionate 
                organizers with enthusiastic attendees.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg">Get Started</button>
                <button className="btn btn-outline-secondary btn-lg">Contact Us</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="EventSphere Community" 
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 mb-4">
                <div className="stat-card">
                  <h3 className="stat-number text-primary">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title mb-4">Our Story</h2>
              <p className="story-text">
                Founded in 2018, EventSphere began as a simple idea: make event discovery 
                and booking as seamless as possible. What started as a small platform for 
                local events has grown into a comprehensive ecosystem serving millions of 
                users worldwide.
              </p>
              <p className="story-text">
                Today, we're proud to be the trusted platform for event organizers and 
                attendees alike, offering cutting-edge technology with a human touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Values</h2>
          <div className="row">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="value-card text-center">
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h5 className="value-title">{value.title}</h5>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Meet Our Team</h2>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="team-card text-center">
                  <div className="team-image mb-3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="rounded-circle"
                    />
                  </div>
                  <h5 className="team-name">{member.name}</h5>
                  <p className="team-role text-primary">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Our Mission" 
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title mb-4">Our Mission</h2>
              <p className="mission-text">
                To create a world where anyone can easily discover and participate in 
                events that inspire, educate, and connect communities. We're committed 
                to building technology that removes barriers and brings people together 
                through shared experiences.
              </p>
              <div className="d-flex align-items-center mt-4">
                <FaAward className="text-primary me-3" size={24} />
                <div>
                  <h6 className="mb-1">Award Winning Platform</h6>
                  <small>Recognized for innovation in event technology</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Ready to Join the EventSphere Community?</h2>
              <p className="mb-4">
                Whether you're looking to host an event or find your next great experience, 
                we've got you covered.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary btn-lg">Start Exploring Events</button>
                <button className="btn btn-outline-secondary btn-lg">Become an Organizer</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;