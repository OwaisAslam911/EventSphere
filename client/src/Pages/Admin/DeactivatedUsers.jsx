// src/pages/DeactivatedUsers.jsx
import React, { useState } from "react";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

const DeactivatedUsers = () => {
  // Only deactivated users
  const [deactivatedUsers, setDeactivatedUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Attendee" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Moderator" },
  ]);

  // Activate user (remove from deactivated list)
  const handleActivate = (id) => {
    setDeactivatedUsers(deactivatedUsers.filter((u) => u.id !== id));
    // Optional: Add to active users list via context or API
  };

  // Delete user permanently
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to permanently delete this user?")) {
      setDeactivatedUsers(deactivatedUsers.filter((u) => u.id !== id));
    }
  };

  return (
    <div>
      <h2 className="fw-bold mb-4">Deactivated Users</h2>

      {/* Table */}
      <div className="card shadow-sm card-app">
        <div className="card-body">
          <h5 className="mb-3">Inactive Accounts</h5>

          {deactivatedUsers.length === 0 ? (
            <p className="text-muted-app text-center py-4">
              No deactivated users found.
            </p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {deactivatedUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span
                          className={`badge bg-${
                            user.role === "Admin"
                              ? "danger"
                              : user.role === "Moderator"
                              ? "warning"
                              : "secondary"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="text-end">
                        {/* Activate Button */}
                        <button
                          className="btn btn-outline-success btn-sm me-2"
                          onClick={() => handleActivate(user.id)}
                          title="Activate User"
                        >
                          <FaCheckCircle />
                        </button>

                        {/* Delete Button */}
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(user.id)}
                          title="Delete Permanently"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeactivatedUsers;