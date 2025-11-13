// import React, { useContext } from "react";
// import { Outlet } from "react-router";
// import AdminNavbar from "../Components/Admin/AdminNavbar";
// import AdminSidebar from "../Components/Admin/AdminSidebar";
// import AdminFooter from "../Components/Admin/AdminFooter";
// import { ThemeContext } from "../App";

// const AdminLayout = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={`d-flex theme-${theme}`} style={{ minHeight: "100vh" }}>
//       {/* Sidebar */}
//       <AdminSidebar />

//       {/* Main content area */}
//       <div className="flex-grow-1 d-flex flex-column">
//         <AdminNavbar />

//         {/* Content */}
//         <main
//           className="flex-grow-1 p-4"
//           style={{
//             backgroundColor: theme === "dark" ? "#121212" : "#f8f9fa",
//             color: theme === "dark" ? "#f8f9fa" : "#212529",
//             transition: "background-color 0.3s, color 0.3s",
//           }}
//         >
//           <Outlet />
//         </main>

//         <AdminFooter />
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
// src/layouts/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import AdminNavbar from '../Components/Admin/AdminNavbar'
import AdminSidebar from "../Components/Admin/AdminSidebar";
import AdminFooter from "../Components/Admin/AdminFooter";

const AdminLayout = () => {
return (
    <div className="d-flex bg-app" style={{ minHeight: "100vh" }}>
      {/* Sidebar & Navbar use default bg (darker) */}
      <AdminSidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <AdminNavbar />
        
        {/* ← MAIN CONTENT: paler background */}
        <main className="flex-grow-1 p-4 bg-content text-app">
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;