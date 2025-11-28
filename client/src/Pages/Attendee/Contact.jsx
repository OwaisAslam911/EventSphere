import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import '../pagecss.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon to Fri 9am to 6pm"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "support@eventsphere.com",
      description: "Send us your query anytime!"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: "123 Event Street, City",
      description: "Visit our headquarters"
    },
    {
      icon: <FaClock />,
      title: "Support Hours",
      details: "24/7 Available",
      description: "We're here to help anytime"
    }
  ];

  const faqs = [
    {
      question: "How do I create an event?",
      answer: "Simply sign up as an organizer, verify your account, and use our event creation wizard to set up your event in minutes."
    },
    {
      question: "What types of events can I host?",
      answer: "You can host conferences, workshops, meetups, concerts, webinars, and virtually any type of gathering."
    },
    {
      question: "How do ticket payments work?",
      answer: "We handle secure payments through multiple providers. Organizers receive payments after the event concludes."
    },
    {
      question: "Can I get a refund for my ticket?",
      answer: "Refund policies are set by event organizers. Please check the specific event's refund policy before purchasing."
    }
  ];

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
              <p className="lead mb-4">
                We'd love to hear from you. Whether you have questions, feedback, or need support, 
                our team is here to help you make every event unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods py-5">
        <div className="container">
          <div className="row">
            {contactInfo.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="card-app p-3 text-center">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <h5 className="contact-method-title">{item.title}</h5>
                  <p className="contact-details">{item.details}</p>
                  <small className="contact-description">{item.description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="card-app p-4">
                <h3 className="form-title mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Office Info & Social */}
            <div className="col-lg-4">
              <div className="card-app p-4">
                <h4 className="office-title mb-4">Our Office</h4>
                
                <div className="office-map mb-4">
                  <div className="map-placeholder">
                    <FaMapMarkerAlt size={48} className="text-primary mb-3" />
                    <p>Interactive Map</p>
                    <small className="text-muted">123 Event Street, Tech City, TC 12345</small>
                  </div>
                </div>

                <div className="office-details">
                  <h6 className="mb-3">Business Hours</h6>
                  <div className="business-hours">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="social-links mt-4">
                  <h6 className="mb-3">Follow Us</h6>
                  <div className="d-flex gap-3">
                    <a href="#" className="social-link">
                      <FaFacebook />
                    </a>
                    <a href="#" className="social-link">
                      <FaTwitter />
                    </a>
                    <a href="#" className="social-link">
                      <FaInstagram />
                    </a>
                    <a href="#" className="social-link">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="section-title text-center mb-5">Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Still Have Questions?</h2>
              <p className="mb-4">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-primary btn-lg">
                  <FaPhone className="me-2" />
                  Call Now
                </button>
                <button className="btn btn-outline-secondary btn-lg">
                  <FaEnvelope className="me-2" />
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;