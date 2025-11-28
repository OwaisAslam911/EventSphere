import React from 'react';
import { Outlet } from 'react-router';
// import './AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className="auth-layout bg-app">
      <div className="auth-container">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;