import React, { useState, useEffect } from "react";
import * as client from "./client";
function UserTable() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);

  const [user, setUser] = useState({ username: "", password: "", role: "USER", firstName: "", lastName: "" });
  const createUser = async () => {
    try {
        console.log("Creating user");
        console.log(user);
      const newUser = await client.createUser(user);
      console.log(newUser);
      setUsers([newUser, ...users]);
    } catch (err) {
      //console.log(err);
    }
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
        <tr>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        <tr>
        <td>
                <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="Username" />
            </td>
            <td>
              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />
            </td>
           
            <td>
                <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} placeholder="First Name" />
            </td>
            <td>
                <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} placeholder="Last Name" />
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
                <button onClick={createUser}>Create</button>
                <button onClick={updateUser}>Update</button>
            </td>
          </tr>

        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td>
                    <button onClick={() => selectUser(user)}>Select</button>
                    <button onClick={() => deleteUser(user)}>Delete</button>
                </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;