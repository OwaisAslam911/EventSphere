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
import OrganizerLayout from "./Layouts/OrganizerLayout";
import OrganizerDashboard from "./Pages/Organizer/OrganizerDashboard";
import AttendeesList from "./Pages/Organizer/AttendeesList";
import MyEventList from "./Pages/Organizer/MyEventList";

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
          <Route path="/organizer" element={<OrganizerLayout />}>
            <Route index element={<OrganizerDashboard />} />
            <Route path="attendeesList" element={<AttendeesList />} />
            <Route path="myEvents" element={<MyEventList />} />
            {/* <Route path="settings" element={<Settings />} />
            <Route path="deactivatedUsers" element={<DeactivatedUsers />} /> */}
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
