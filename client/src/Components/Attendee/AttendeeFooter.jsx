import React from "react";

const AttendeeFooter = () => {
  return (
    <footer className="attendee-footer shadow-lg border-top mt-5">
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">EventHub</h5>
            <p className="text-muted">
              Your gateway to amazing events and experiences.
            </p>
          </div>
          <div className="col-md-2 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/events" className="text-muted text-decoration-none">
                  Events
                </a>
              </li>
              <li>
                <a href="/bookings" className="text-muted text-decoration-none">
                  My Bookings
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/help" className="text-muted text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Contact Info</h6>
            <ul className="list-unstyled text-muted">
              <li>Email: support@eventhub.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} EventHub. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-links">
              <a href="#" className="text-muted me-3 text-decoration-none">
                Facebook
              </a>
              <a href="#" className="text-muted me-3 text-decoration-none">
                Twitter
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AttendeeFooter;
