// import React from "react";
// import styles from "./AttendeeComponents.module.css";
// import { useTheme } from "../../context/ThemeContext";
// import { FaSun, FaMoon, FaUserCircle, FaBars } from "react-icons/fa";
// import { Link } from "react-router";

// const AttendeeNavbar = ({ onToggleSidebar }) => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className="navbar sticky-top navbar-expand-lg  shadow-lg">
//       <div className="container-fluid">
//         <Link className="navbar-brand fw-bold" to="/">
//           Event Sphere
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse ms-lg-5" id="navbarNav">
//           <ul className="navbar-nav me-auto ">
//             <li className="nav-item">
//               <Link className="nav-link " to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/events">
//                 Events
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           <div className="ms-auto d-flex align-items-center gap-3">
//             <div className="dropdown">
//               <button
//                 className={`btn p-1 ${styles.profileBtn}`}
//                 data-bs-toggle="dropdown"
//               >
//                 <FaUserCircle size={32} />
//               </button>

//               <ul className="dropdown-menu dropdown-menu-end">
//                 <li>
//                   <Link className="dropdown-item" to="/profile">
//                     Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/myBookings">
//                     My Bookings
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Logout
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Theme Switch */}
//             <div className={styles.themeSwitchWrapper}>
//               <label className={styles.themeSwitch}>
//                 <input
//                   type="checkbox"
//                   checked={theme === "dark"}
//                   onChange={toggleTheme}
//                 />
//                 <span className={styles.slider}>
//                   <span className={styles.icon}>
//                     {theme === "light" ? <FaSun /> : <FaMoon />}
//                   </span>
//                   <span className={styles.modeText}>
//                     {theme === "light" ? "LIGHT" : "DARK"}
//                   </span>
//                 </span>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default AttendeeNavbar;
import React, { useState, useEffect } from "react";
import styles from "./AttendeeComponents.module.css";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const AttendeeNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg shadow-lg ${
        styles.navbar
      } ${isScrolled ? styles.navbarScrolled : ""}`}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand fw-bold ${styles.brandText}`} to="/">
          Event Sphere
        </Link>

        <button
          className={`navbar-toggler ${styles.navToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-lg-5" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/contact">
                Contact
              </Link>
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
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myBookings">
                    My Bookings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/auth/login">
                    login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/auth/signup">
                    signup
                  </Link>
                </li>
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
