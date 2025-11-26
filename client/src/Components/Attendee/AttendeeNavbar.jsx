import React from 'react'
const AttendeeNavbar = ({ onToggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

 return (
     <nav className="navbar navbar-expand-lg shadow-sm px-4 d-flex align-items-center">
       {/* Hamburger Menu Button */}
       <button 
         className="btn btn-outline-secondary me-3 d-lg-none"
         onClick={onToggleSidebar}
       >
         <FaBars />
       </button>
       <ul className="nav-list">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link"></a>Events</li>
        <li className="nav-item"><a href="#" className="nav-link"></a>Book Events</li>
        <li className="nav-item"><a href="#" className="nav-link"></a>Contact</li>
       </ul>
 
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
}

export default AttendeeNavbar