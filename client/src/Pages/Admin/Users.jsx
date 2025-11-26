import React, { useState } from "react";
import { FaUserPlus, FaTrash, FaEdit } from "react-icons/fa";
import '../pagecss.css'

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Attendee", status: "Inactive" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Attendee",
    status: "Active",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setUsers(users.map(u => u.id === editingId ? { ...u, ...form } : u));
      setEditingId(null);
    } else {
      setUsers([...users, { id: Date.now(), ...form }]);
    }
    setForm({ name: "", email: "", role: "Attendee", status: "Active" });
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role: user.role, status: user.status });
    setEditingId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div>
      <h2 className="fw-bold mb-4">User Management</h2>

      {/* === REGISTRATION FORM === */}
      {/* <div className="card shadow-sm card-app p-4 mb-5"> */}
      <div className="card-app p-4 mb-5">
        <h5 className="mb-3 d-flex align-items-center">
          <FaUserPlus className="me-2" />
          {editingId ? "Edit User" : "Register New User"}
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control glass-input text-app"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter full name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control glass-input text-app"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="user@example.com"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Role</label>
              <select name="role" className="form-select glass-input text-app" value={form.role} onChange={handleChange}>
                <option value="Attendee">Attendee</option>
                <option value="Moderator">Moderator</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Status</label>
              <select name="status" className="form-select glass-input text-app" value={form.status} onChange={handleChange}>
                <option className="glass-input-options" value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary me-2">
                {editingId ? "Update User" : "Add User"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setEditingId(null);
                    setForm({ name: "", email: "", role: "Attendee", status: "Active" });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* === USERS TABLE === */}
      <div className="card-app p-3">
        <div className="card-body">
          <h5 className="mb-3">All Users</h5>
          {users.length === 0 ? (
            <p className="text-muted-app text-center py-4">No users registered yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th className="td">Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
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
                      <td>
                        <span
                          className={`badge bg-${user.status === "Active" ? "success" : "secondary"}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          className="btn btn-outline-primary btn-sm me-2"
                          onClick={() => handleEdit(user)}
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(user.id)}
                          title="Delete"
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

export default Users;