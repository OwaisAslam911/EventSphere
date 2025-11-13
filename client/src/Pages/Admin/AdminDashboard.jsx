// // import React from 'react'

// // const AdminDashboard = () => {
// //   return (
// //     <div>
// //       <div className="row">
// //         <div className="col-md-4">
// //           <div className="card shadow-sm mb-3">
// //             <div className="card-body">
// //               <h5 className="card-title">Users</h5>
// //               <p className="card-text">Total registered users: 120</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminDashboard
// import React, { useContext } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";
// import { ThemeContext } from "../../App";

// const AdminDashboard = () => {
//   const { theme } = useContext(ThemeContext);

//   // 📊 Sample data for charts
//   const userGrowthData = [
//     { month: "Jan", users: 40 },
//     { month: "Feb", users: 60 },
//     { month: "Mar", users: 80 },
//     { month: "Apr", users: 90 },
//     { month: "May", users: 110 },
//     { month: "Jun", users: 130 },
//   ];

//   const userRoleData = [
//     { name: "Admins", value: 10 },
//     { name: "Moderators", value: 25 },
//     { name: "Attendees", value: 85 },
//   ];

//   const COLORS = ["#007bff", "#ffc107", "#28a745"];

//   // 🖌️ Theme styles
//   const cardStyle = {
//     backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
//     color: theme === "dark" ? "#f8f9fa" : "#212529",
//     border: "none",
//   };

//   return (
//     <div>
//       <h2 className="fw-bold mb-4">Dashboard Overview</h2>

//       {/* ===== Stats Cards ===== */}
//       <div className="row">
//         <div className="col-md-3 mb-3">
//           <div className="card shadow-sm" style={cardStyle}>
//             <div className="card-body">
//               <h6 className=" ">Total Users</h6>
//               <h4 className="fw-bold">120</h4>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card shadow-sm" style={cardStyle}>
//             <div className="card-body">
//               <h6 className=" ">Active Events</h6>
//               <h4 className="fw-bold">34</h4>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card shadow-sm" style={cardStyle}>
//             <div className="card-body">
//               <h6 className=" ">Tickets Sold</h6>
//               <h4 className="fw-bold">540</h4>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 mb-3">
//           <div className="card shadow-sm" style={cardStyle}>
//             <div className="card-body">
//               <h6 className=" ">Revenue</h6>
//               <h4 className="fw-bold">$12,400</h4>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===== Charts Section ===== */}
//       <div className="row mt-4">
//         {/* Line Chart */}
//         <div className="col-md-8 mb-4">
//           <div className="card shadow-sm p-3" style={cardStyle}>
//             <h5 className="fw-bold mb-3">User Growth Over Time</h5>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={userGrowthData}>
//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   stroke={theme === "dark" ? "#333" : "#ccc"}
//                 />
//                 <XAxis dataKey="month" stroke={theme === "dark" ? "#fff" : "#000"} />
//                 <YAxis stroke={theme === "dark" ? "#fff" : "#000"} />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="users"
//                   stroke="#007bff"
//                   strokeWidth={2}
//                   dot={{ r: 4 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Pie Chart */}
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm p-3" style={cardStyle}>
//             <h5 className="fw-bold mb-3">User Roles</h5>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={userRoleData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={100}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label
//                 >
//                   {userRoleData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Legend />
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// src/pages/AdminDashboard.jsx
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

const AdminDashboard = () => {
  const userGrowthData = [
    { month: "Jan", users: 40 }, { month: "Feb", users: 60 },
    { month: "Mar", users: 80 }, { month: "Apr", users: 90 },
    { month: "May", users: 110 }, { month: "Jun", users: 130 },
  ];

  const userRoleData = [
    { name: "Admins", value: 10 },
    { name: "Moderators", value: 25 },
    { name: "Attendees", value: 85 },
  ];

  const COLORS = ["#007bff", "#ffc107", "#28a745"];

  return (
    <div>
      <h2 className="fw-bold mb-4">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="row g-3">
        {[
          { label: "Total Users", value: "120" },
          { label: "Active Events", value: "34" },
          { label: "Tickets Sold", value: "540" },
          { label: "Revenue", value: "$12,400" },
        ].map((stat, i) => (
          <div key={i} className="col-md-3">
            <div className="card shadow-sm card-app h-100">
              <div className="card-body">
                <h6 className="text-muted-app">{stat.label}</h6>
                <h4 className="fw-bold">{stat.value}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="row mt-4 g-4">
        <div className="col-md-8">
          <div className="card shadow-sm card-app p-3">
            <h5 className="fw-bold mb-3">User Growth</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--bs-border-color)" />
                <XAxis dataKey="month" stroke="var(--bs-body-color)" />
                <YAxis stroke="var(--bs-body-color)" />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#007bff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm card-app p-3">
            <h5 className="fw-bold mb-3">User Roles</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userRoleData}
                  cx="50%" cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {userRoleData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;