import React, { useState } from 'react';
import { format } from 'date-fns';

const UserTable = ({ users }) => {
  // State to manage password visibility
  const [visiblePasswords, setVisiblePasswords] = useState({});

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle password visibility
  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Filtered users based on search query
  const filteredUsers = users.filter((user) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      user.id.toString().includes(searchQuery) ||
      (user.firstName && user.firstName.toLowerCase().includes(lowerCaseSearchQuery)) ||
      (user.lastName && user.lastName.toLowerCase().includes(lowerCaseSearchQuery)) ||
      (user.email && user.email.toLowerCase().includes(lowerCaseSearchQuery))
    );
  });
  return (
    <div className="overflow-x-auto">
      {/* Search input */}
      
      
      
  <div className="flex items-center max-w-sm mx-auto mb-5 mt-3">   
  <label htmlFor="simple-search" className="sr-only">Search</label>
  <div className="relative w-full">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
      </svg>
    </div>
    <input
  type="text"
  id="simple-search"
  className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
  placeholder="Search by ID, Name, or Email"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  required
/>
    

  </div>
</div>



      {/* User table */}
      <table className="min-w-full table-auto border-collapse border border-gray-400 mt-2">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">#id</th>
            <th className="border border-gray-400 px-4 py-2">Device ID</th>
            <th className="border border-gray-400 px-4 py-2">First Name</th>
            <th className="border border-gray-400 px-4 py-2">Last Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Password</th>
            <th className="border border-gray-400 px-4 py-2">Address</th>
            <th className="border border-gray-400 px-4 py-2">Role</th>
            <th className="border border-gray-400 px-4 py-2">Created At</th>
            <th className="border border-gray-400 px-4 py-2">Updated At</th>
            <th className="border border-gray-400 px-4 py-2">Phone No.</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-400 px-4 py-2">{user.id}</td>
              <td className="border border-gray-400 px-4 py-2">{user.deviceId}</td>
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
              <td className="border border-gray-400 px-4 py-2">
                {user.phone_no}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
