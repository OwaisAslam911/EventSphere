
import React from 'react';
import { Outlet } from 'react-router';
import AttendeeNavbar from '../Components/Attendee/AttendeeNavbar'; // Adjust path as needed
import AttendeeFooter from '../Components/Attendee/AttendeeFooter';


const AttendeeLayout = () => {
  return (
    <div className="attendee-layout bg-app">
      {/* Navbar */}
      <AttendeeNavbar />
      
      {/* Main Content */}
      <main className="attendee-main-content">
        <Outlet /> {/* This renders the child routes */}
      </main>
      <AttendeeFooter />
      {/* Footer */}
    
    </div>
  );
};

export default AttendeeLayout;