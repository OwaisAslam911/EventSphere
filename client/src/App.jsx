import React, { useState, createContext, useContext } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Pages/Attendee/Home";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Users from "./Pages/Admin/Users";
import Settings from "./Pages/Admin/Settings";
import AdminLayout from "./Layouts/AdminLayout";
import Events from "./Pages/Admin/Events";
import DeactivatedUsers from "./Pages/Admin/DeactivatedUsers";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Apply global theme class */}
      <div className={`app-container theme-${theme}`}>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="events" element={<Events />} />
            <Route path="settings" element={<Settings />} />
            <Route path="deactivatedUsers" element={<DeactivatedUsers />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
