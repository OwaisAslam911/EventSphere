import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron  p-5 rounded">
            <h1 className="display-4">Welcome to EventHub!</h1>
            <p className="lead">Discover and book amazing events in your area.</p>
            <hr className="my-4" />
            <p>Browse through our wide selection of events and book your tickets today.</p>
            <a className="btn btn-primary btn-lg" href="/events" role="button">
              Explore Events
            </a>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card-app p-4 mb-sm-2">
            <div className="card-body">
              <h5 className="card-title">Upcoming Events</h5>
              <p className="card-text">Find events happening near you.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-app p-4 mb-sm-2">
            <div className="card-body">
              <h5 className="card-title">Easy Booking</h5>
              <p className="card-text">Book tickets in just a few clicks.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-app p-4 mb-sm-2">
            <div className="card-body">
              <h5 className="card-title">Manage Bookings</h5>
              <p className="card-text">View and manage all your bookings in one place.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;