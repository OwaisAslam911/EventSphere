import React from "react";
import { Link, useLocation } from "react-router";
import styles from "./OrganizerComponents.module.css";

const OrganizerSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `nav-link d-flex align-items-center ${
      pathname === path ? "active fw-bold" : ""
    }`;

  const handleLinkClick = () => setSidebarOpen(false);

  return (
    <div
      className={`${styles["organizer-sidebar"]} bg-app ${
        sidebarOpen ? styles["open"] : ""
      }`}
    >
      <h3 className="mb-4 pt-4 text-center">Organizer</h3>

      <ul className="nav flex-column gap-2 flex-grow-1">
        <li className="nav-item">
          <Link to="/organizer" className={linkClass("/organizer")} onClick={handleLinkClick}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/organizer/attendeesList"
            className={linkClass("/organizer/attendeesList")}
            onClick={handleLinkClick}
          >
            <i className="bi bi-people me-2"></i> Attendees
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/organizer/myEvents"
            className={linkClass("/organizer/myEvents")}
            onClick={handleLinkClick}
          >
            <i className="bi bi-calendar-event me-2"></i> My Events
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default OrganizerSidebar;
