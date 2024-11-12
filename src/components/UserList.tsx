import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/UserList.css"; // Add a CSS file for styling

interface User {
  id: number;
  fullName: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchId, setSearchId] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<User | null>(null);

  useEffect(() => { 
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = async () => {
    if (searchId.trim() === "") return;

    try {
      const response = await axios.get(`http://localhost:5000/users/${searchId}`);
      setSearchedUser(response.data);
    } catch (error) {
      console.error("error fetching user by ID", error);
      setSearchedUser(null); // reset if not found or on error
    }
  };

  const handleDelete = async (userId: number) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      if (searchedUser && searchedUser.id === userId) setSearchedUser(null);
    } catch (error) {
      console.error("error deleting user", error);
    }
  };

  return (
    <div className="user-list-container">
      <h2 className="header">Registered Users</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {user.fullName}
            <button className="delete-btn" onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="search-container">
        <h3>Search User by ID</h3>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter user ID"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {searchedUser && (
        <div className="search-result">
          <h3>Search Result:</h3>
          <p>{searchedUser.fullName}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
