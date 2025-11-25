// import React from 'react'
// import OrganizerSidebar from '../Components/Organizer/OrganizerSidebar'
// import OrganizerNavbar from '../Components/Organizer/OrganizerNavbar'

// const OrganizerLayout = () => {
//   return (
//     <div className="d-flex bg-app" style={{ minHeight: "100vh" }}>
//       <OrganizerSidebar />
      
//       {/* This wrapper should have the background */}
//       <div className="flex-grow-1 d-flex flex-column bg-app">
//         <OrganizerNavbar />
        
//         {/* Main content area */}
//         <main className="p-3 p-md-4 flex-grow-1">
//           <div className=" h-100 p-3 p-md-4 ">
//             <Outlet />
//           </div>
//         </main>

//         <AdminFooter />
//       </div>
//     </div>
//   )
// }

// export default OrganizerLayout
import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router";
import OrganizerNavbar from "../Components/Organizer/OrganizerNavbar";
import OrganizerSidebar from "../Components/Organizer/OrganizerSidebar";
import OrganizerFooter from "../Components/Organizer/OrganizerFooter"; 

const OrganizerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex bg-app" style={{ minHeight: "100vh" }}>
      <div ref={sidebarRef}>
        <OrganizerSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      {sidebarOpen && (
        <div
          className="sidebar-backdrop d-lg-none"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1999,
            cursor: "pointer",
          }}
        />
      )}

      <div className="flex-grow-1 d-flex flex-column bg-app">
        <OrganizerNavbar onToggleSidebar={toggleSidebar} />

        <main className="p-3 p-md-4 flex-grow-1">
          <div className="h-100 p-3 p-md-4">
            <Outlet />
          </div>
        </main>

        <OrganizerFooter />
      </div>
    </div>
  );
};

export default OrganizerLayout;
