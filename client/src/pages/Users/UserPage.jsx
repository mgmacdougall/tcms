import { useEffect, useState } from "react";
import axios from "axios";

function UserPage() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("Tester");

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name: userName,
        email: userEmail,
        role: userRole,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user`,
        newUser,
      );
      console.log("Users response:", response.data);

      setUsers([...users, response.data]);
      setUserName("");
      setUserEmail("");
      setUserRole("Tester");
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const haldleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserRoleChange = (e) => {
    setUserRole(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser(e);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/all`,
      );
      console.log("Fetched users:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      await fetchUsers();
    };

    loadUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h1>User Page</h1>
      {/* <ul className="list-group"> */}
      {users.map((user) => (
        <div key={user._id} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.role}</h6>
            <p className="card-text">Email: {user.email}</p>
            {/* <a href="#" class="card-link">
                Card link
              </a> */}
            {/* <a href="#" class="card-link">
                Another link
              </a> */}
          </div>
        </div>
      ))}
      {/* </ul> */}
      <div className="mt-4">
        <h2>Add New User</h2>
        {/* Form to add new user */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={userName}
              onChange={haldleUserNameChange}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              value={userEmail}
              onChange={handleUserEmailChange}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              value={userRole}
              onChange={handleUserRoleChange}
              className="form-select"
              id="role"
            >
              <option value="Admin">Admin</option>
              <option value="Tester">Tester</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
