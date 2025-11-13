// import React from 'react'
// import { Link, useLocation } from 'react-router';

// const AdminSidebar = () => {
//  const { pathname } = useLocation();

//   const linkClass = (path) =>
//     `nav-link ${pathname === path ? "active fw-bold" : "text-dark"}`;

//   return (
//     <div className="bg-white border-end p-3" style={{ width: "240px" }}>
//       <h4 className="text-primary mb-4">Admin Panel</h4>
//       <ul className="nav flex-column gap-2">
//         <li className="nav-item">
//           <Link to="/admin" className={linkClass("/admin")}>
//             <i className="bi bi-speedometer2 me-2"></i> Dashboard
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/admin/users" className={linkClass("/admin/users")}>
//             <i className="bi bi-people me-2"></i> Users
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/admin/settings" className={linkClass("/admin/settings")}>
//             <i className="bi bi-gear me-2"></i> Settings
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }


// export default AdminSidebar
// src/components/AdminSidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router";

const AdminSidebar = () => {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `nav-link d-flex align-items-center ${pathname === path ? "active fw-bold" : ""}`;

  return (
    <div className="bg-app border-end p-3 d-flex flex-column" style={{ width: "240px" }}>
      <h4 className="text-primary mb-4">EventSphere</h4>
      <ul className="nav flex-column gap-2 flex-grow-1">
        <li className="nav-item">
          <Link to="/admin" className={linkClass("/admin")}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/users" className={linkClass("/admin/users")}>
            <i className="bi bi-people me-2"></i> Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/deactivatedUsers" className={linkClass("/admin/deactivatedUsers")}>
            <i className="bi bi-people me-2"></i> Deactivated Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/events" className={linkClass("/admin/events")}>
            <i className="bi bi-people me-2"></i> Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/settings" className={linkClass("/admin/settings")}>
            <i className="bi bi-gear me-2"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;