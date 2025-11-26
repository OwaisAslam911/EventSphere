import React from 'react';
import styles from "./AttendeeComponents.module.css"
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon, FaUserCircle, FaBars } from "react-icons/fa";

const AttendeeNavbar = ({ onToggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg  shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          Event Sphere
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse ms-lg-5" id="navbarNav">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <a className="nav-link " href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bookings">My Bookings</a>
            </li>
          </ul>
          
   
            <div className="ms-auto d-flex align-items-center gap-3">
                  <div className="dropdown">
                    <button
                      className={`btn p-1 ${styles.profileBtn}`}
                      data-bs-toggle="dropdown"
                    >
                      <FaUserCircle size={32} />
                    </button>
          
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><a className="dropdown-item" href="#">My Bookings</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                  </div>
          
                       {/* Theme Switch */}
                          <div className={styles.themeSwitchWrapper}>
                            <label className={styles.themeSwitch}>
                              <input
                                type="checkbox"
                                checked={theme === "dark"}
                                onChange={toggleTheme}
                              />
                              <span className={styles.slider}>
                                <span className={styles.icon}>
                                  {theme === "light" ? <FaSun /> : <FaMoon />}
                                </span>
                                <span className={styles.modeText}>
                                  {theme === "light" ? "LIGHT" : "DARK"}
                                </span>
                              </span>
                            </label>
                          </div>
                </div> 
        </div>
      </div>
    </nav>
  );
};

export default AttendeeNavbar;
