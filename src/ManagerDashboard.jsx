import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';
import DeleteUserForm from './DeleteUserForm';
import ChangeUserRoleForm from './ChangeUserRoleForm';
import ManagerHorizonatalBar from './ManagerHorizonatalBar';
import UserTable from './UserTable';
import Sidebar from './components/Sidebar';

const ManagerDashboard = () => {
  const [users, setUsers] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Keep initial state true

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/allUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/addUser', formData);
      fetchUsers();
      toast.success('User added successfully');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleUpdateUser = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/updateUser', formData);
      fetchUsers();
      toast.success('User updated successfully');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleDeleteUser = async (deleteId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteUser/${deleteId}`);
      fetchUsers();
      toast.success('User Deleted successfully');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleChangeUserRole = async (formData) => {
    const { id, role } = formData;

    try {
      const response = await axios.post(`http://localhost:5000/changeUserRole/${id}`, { role });
      fetchUsers();
      toast.success("User updated Successfully");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Conditionally render sidebar based on its state */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content with responsive styles */}
      <div className={`flex-1 ml-4 relative ${sidebarOpen ? 'pl-48' : ''}`}>
        <ManagerHorizonatalBar className="container mx-auto"/>
        <div className="container mx-auto p-4">
          <AddUserForm onAddUser={handleAddUser} />
          <UpdateUserForm onUpdateUser={handleUpdateUser} />
          <DeleteUserForm onDeleteUser={handleDeleteUser} />
          <ChangeUserRoleForm onChangeUserRole={handleChangeUserRole} />
          <UserTable users={users} />
        </div>

        {/* Media query to adjust content padding on larger screens */}
        <style jsx>{`
          @media (min-width: 768px) {
            .container.mx-auto.p-4 {
              padding-left: calc(64px + 1rem);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ManagerDashboard;
