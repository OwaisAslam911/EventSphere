// // import React from "react";
// // import { Link, useLocation } from "react-router";
// // import "./AdminSidebar.css";

// // const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
// //   const { pathname } = useLocation();

// //   const linkClass = (path) =>
// //     `nav-link d-flex align-items-center ${
// //       pathname === path ? "active fw-bold" : ""
// //     }`;

// //   return (
// //     //<div className="bg-app border-end p-3 d-flex flex-column" style={{ width: "240px" }}>
// //     <div className={`admin-sidebar bg-app ${sidebarOpen ? "open" : ""}`}>
// //       <h4 className="text-primary mb-4 d-flex justify-content-between">
// //         EventSphere
// //         <span
// //           className="d-lg-none close-btn"
// //           onClick={() => setSidebarOpen(false)}
// //         >
// //           ✖
// //         </span>
// //       </h4>

// //       <ul className="nav flex-column gap-2 flex-grow-1">
// //         <li className="nav-item">
// //           <Link to="/admin" className={linkClass("/admin")}>
// //             <i className="bi bi-speedometer2 me-2"></i> Dashboard
// //           </Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link to="/admin/users" className={linkClass("/admin/users")}>
// //             <i className="bi bi-people me-2"></i> Users
// //           </Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link to="/admin/deactivatedUsers" className={linkClass("/admin/deactivatedUsers")}>
// //             <i className="bi bi-people me-2"></i> Deactivated Users
// //           </Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link to="/admin/events" className={linkClass("/admin/events")}>
// //             <i className="bi bi-people me-2"></i> Events
// //           </Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link to="/admin/settings" className={linkClass("/admin/settings")}>
// //             <i className="bi bi-gear me-2"></i> Settings
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default AdminSidebar;
// import React from "react";
// import { Link, useLocation } from "react-router";
// import styles from "./AdminComponents.module.css";

// const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
//   const { pathname } = useLocation();

//   const linkClass = (path) =>
//     `nav-link d-flex align-items-center ${
//       pathname === path ? "active fw-bold" : ""
//     }`;

//   return (
//     <div className={`${styles['admin-sidebar']} bg-app ${sidebarOpen ? styles['open'] : ''}`}>
//       <h3 className=" mb-4 pt-4 text-center">
//         EventSphere
//         {/* REMOVED THE CLOSE BUTTON */}
//       </h3>

//       <ul className="nav flex-column gap-2 flex-grow-1">
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
//           <Link to="/admin/deactivatedUsers" className={linkClass("/admin/deactivatedUsers")}>
//             <i className="bi bi-people me-2"></i> Deactivated Users
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/admin/events" className={linkClass("/admin/events")}>
//             <i className="bi bi-people me-2"></i> Events
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
// };

// export default AdminSidebar;
import React from "react";
import { Link, useLocation } from "react-router";
import styles from "./AdminComponents.module.css";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `nav-link d-flex align-items-center ${
      pathname === path ? "active fw-bold" : ""
    }`;

  // Close sidebar when any link is clicked
  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`${styles['admin-sidebar']} bg-app ${sidebarOpen ? styles['open'] : ''}`}>
      <h3 className=" mb-4 pt-4 text-center">
        EventSphere
      </h3>

      <ul className="nav flex-column gap-2 flex-grow-1">
        <li className="nav-item">
          <Link 
            to="/admin" 
            className={linkClass("/admin")}
            onClick={handleLinkClick}
          >
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/admin/users" 
            className={linkClass("/admin/users")}
            onClick={handleLinkClick}
          >
            <i className="bi bi-people me-2"></i> Users
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/admin/deactivatedUsers" 
            className={linkClass("/admin/deactivatedUsers")}
            onClick={handleLinkClick}
          >
            <i className="bi bi-people me-2"></i> Deactivated Users
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/admin/events" 
            className={linkClass("/admin/events")}
            onClick={handleLinkClick}
          >
            <i className="bi bi-people me-2"></i> Events
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/admin/settings" 
            className={linkClass("/admin/settings")}
            onClick={handleLinkClick}
          >
            <i className="bi bi-gear me-2"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;