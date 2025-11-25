import React from "react";
import { FaBars, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import styles from "./OrganizerComponents.module.css";

const OrganizerNavbar = ({ onToggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-4 d-flex align-items-center">
      <button
        className="btn btn-outline-secondary me-3 d-lg-none"
        onClick={onToggleSidebar}
      >
        <FaBars />
      </button>

      <span className="navbar-brand fw-bold">Organizer Panel</span>

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
            <li><a className="dropdown-item" href="#">Settings</a></li>
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
    </nav>
  );
};

export default OrganizerNavbar;
