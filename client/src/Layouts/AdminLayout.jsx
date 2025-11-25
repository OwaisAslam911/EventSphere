import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router";
import AdminNavbar from '../Components/Admin/AdminNavbar';
import AdminSidebar from "../Components/Admin/AdminSidebar";
import AdminFooter from "../Components/Admin/AdminFooter";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start with sidebar open on large screens
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex bg-app" style={{ minHeight: "100vh" }}>
      <div ref={sidebarRef}>
        <AdminSidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
      </div>
      
      {/* Backdrop overlay - click to close sidebar */}
      {sidebarOpen && (
        <div 
          className="sidebar-backdrop d-lg-none" // Only show backdrop on mobile
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1999,
            cursor: 'pointer'
          }}
        />
      )}
      
      <div className="flex-grow-1 d-flex flex-column bg-app">
        <AdminNavbar onToggleSidebar={toggleSidebar} />
        
        <main className="p-3 p-md-4 flex-grow-1">
          <div className="h-100 p-3 p-md-4">
            <Outlet />
          </div>
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;