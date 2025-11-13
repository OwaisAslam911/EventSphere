// import React, { useContext } from "react";
// import { ThemeContext } from "../../App";
// import styles from "./AdminComponents.module.css";
// import { FaSun, FaMoon, FaUserCircle  } from "react-icons/fa";

// const AdminNavbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg shadow-sm px-4 d-flex align-items-center ${
//         theme === "light" ? "navbar-light bg-white" : "navbar-dark bg-dark"
//       }`}
//     >
//       <span className="navbar-brand fw-bold">Dashboard</span>

//       <div className="ms-auto d-flex align-items-center gap-3">
//         {/* Logout Button */}
//         <button className="btn btn-outline-primary">Logout</button>
//         {/* Theme Switch */}
//         <div className={styles.themeSwitchWrapper}>
//           <label className={styles.themeSwitch}>
//             <input
//               type="checkbox"
//               checked={theme === "dark"}
//               onChange={toggleTheme}
//             />
//             <span className={styles.slider}>
//               <span className={styles.icon}>
//                 {theme === "light" ? <FaSun /> : <FaMoon />}
//               </span>
//               <span className={styles.modeText}>
//                 {theme === "light" ? "LIGHT" : "DARK"}
//               </span>
//             </span>
//           </label>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default AdminNavbar;
// import React, { useContext } from "react";
// import { ThemeContext } from "../../App";
// import styles from "./AdminComponents.module.css";
// import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";

// const AdminNavbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg shadow-sm px-4 d-flex align-items-center ${
//         theme === "light" ? "navbar-light bg-white" : "navbar-dark bg-dark"
//       }`}
//     >
//       <span className="navbar-brand fw-bold">Dashboard</span>

//       <div className="ms-auto d-flex align-items-center gap-3">
//         {/* Profile Dropdown */}
//         <div className="dropdown">
//           <button
//             className="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
//             type="button"
//             id="profileDropdown"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <FaUserCircle size={24} className="me-2" />
//             Admin
//           </button>
//           <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
//             <li>
//               <a className="dropdown-item" href="/profile">
//                 Profile
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="/messages">
//                 Messages
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="/logout">
//                 Logout
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Theme Switch */}
//         <div className={styles.themeSwitchWrapper}>
//           <label className={styles.themeSwitch}>
//             <input
//               type="checkbox"
//               checked={theme === "dark"}
//               onChange={toggleTheme}
//             />
//             <span className={styles.slider}>
//               <span className={styles.icon}>
//                 {theme === "light" ? <FaSun /> : <FaMoon />}
//               </span>
//               <span className={styles.modeText}>
//                 {theme === "light" ? "LIGHT" : "DARK"}
//               </span>
//             </span>
//           </label>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default AdminNavbar;
// src/components/AdminNavbar.jsx
// src/components/AdminNavbar.jsx
// src/components/AdminNavbar.jsx
// src/components/AdminNavbar.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./AdminComponents.module.css";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-4 d-flex align-items-center">
      <span className="navbar-brand fw-bold">Dashboard</span>

      <div className="ms-auto d-flex align-items-center gap-3">
        {/* Profile Dropdown */}
        <div className="dropdown">
          <button
            className={`btn p-1 ${styles.profileBtn}`}
            type="button"
            id="profileDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaUserCircle size={32} />
            <span className="visually-hidden">Profile</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
            <li><a className="dropdown-item" href="/profile">Profile</a></li>
            <li><a className="dropdown-item" href="/messages">Messages</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/logout">Logout</a></li>
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

export default AdminNavbar;