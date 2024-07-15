import React, { useState } from 'react';
import { format } from 'date-fns';

const UserTable = ({ users }) => {
  // State to manage password visibility
  const [visiblePasswords, setVisiblePasswords] = useState({});

  // Function to toggle password visibility
  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-400 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">#id</th>
            <th className="border border-gray-400 px-4 py-2">First Name</th>
            <th className="border border-gray-400 px-4 py-2">Last Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Password</th>
            <th className="border border-gray-400 px-4 py-2">Address</th>
            <th className="border border-gray-400 px-4 py-2">Role</th>
            <th className="border border-gray-400 px-4 py-2">Created At</th>
            <th className="border border-gray-400 px-4 py-2">Updated At</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-400 px-4 py-2">{user.id}</td>
              <td className="border border-gray-400 px-4 py-2">{user.firstName}</td>
              <td className="border border-gray-400 px-4 py-2">{user.lastName}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
              <td className="border border-gray-400 px-4 py-2 relative">
                <input
                  type={visiblePasswords[user.id] ? 'text' : 'password'}
                  value={user.password}
                  readOnly
                  className="border-0 bg-transparent w-24 p-1"
                />
                <img
                  src={
                    visiblePasswords[user.id]
                      ? 'https://media.geeksforgeeks.org/wp-content/uploads/20210917150049/eyeslash.png'
                      : 'https://media.geeksforgeeks.org/wp-content/uploads/20210917145551/eye.png'
                  }
                  alt="Toggle Password Visibility"
                  className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                  width="16px"
                  height="16px"
                  onClick={() => togglePasswordVisibility(user.id)}
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">{user.address}</td>
              <td className="border border-gray-400 px-4 py-2">{user.role}</td>
              <td className="border border-gray-400 px-4 py-2">
                {format(new Date(user.created_at), 'yyyy-MM-dd HH:mm:ss')}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {format(new Date(user.updated_at), 'yyyy-MM-dd HH:mm:ss')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
