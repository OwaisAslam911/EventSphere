// import React, { useContext } from "react";
// import { ThemeContext } from "../../App";
// import styles from "./AdminComponents.module.css";
// import { FaSun, FaMoon } from "react-icons/fa";

// const AdminFooter = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <footer
//       className={`text-center border-top py-3 shadow-sm mt-auto ${
//         theme === "light" ? "bg-light" : "bg-dark text-white"
//       }`}
//     >
//       <div className="d-flex justify-content-between align-items-center px-3">
//         <small className={theme === "light" ? "text-muted" : "text-light"}>
//           © {new Date().getFullYear()} EventSphere Admin Panel
//         </small>

       
//       </div>
//     </footer>
//   );
// };

// export default AdminFooter;
// src/components/AdminFooter.jsx
import React from "react";

const AdminFooter = () => {
  return (
    <footer className="text-center border-top py-3 shadow-sm mt-auto bg-app">
      <div className="d-flex justify-content-center align-items-center px-3">
        <small className="text-muted-app">
          © {new Date().getFullYear()} EventSphere Admin Panel
        </small>
      </div>
    </footer>
  );
};

export default AdminFooter;