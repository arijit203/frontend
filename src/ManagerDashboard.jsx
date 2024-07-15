import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast"; // Import useToasts from react-hot-toast
import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';
import DeleteUserForm from './DeleteUserForm';
import ChangeUserRoleForm from './ChangeUserRoleForm';
import ManagerHorizonatalBar from './ManagerHorizonatalBar';
import UserTable from './UserTable';

const ManagerDashboard = () => {
    const [users, setUsers] = useState([]);
     // Destructure addToast from useToasts
   

    // Function to fetch users from the backend API
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allUsers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    useEffect(()=>{
        fetchUsers();
     },[])

    const handleAddUser = async (formData) => {
        try {
            const response = await axios.post('http://localhost:5000/addUser', formData);
            fetchUsers(); // Fetch updated users after adding
            toast.success('User added successfully'); // Show success message
        } catch (error) {
            toast.error(error.response.data.error); // Show error message
        }
    };

    const handleUpdateUser = async (formData) => {
        try {
            const response = await axios.post('http://localhost:5000/updateUser', formData);
            fetchUsers(); // Fetch updated users after updating
            toast.success('User updated successfully'); // Show success message
        } catch (error) {
            toast.error(error.response.data.error); // Show error message
        }
    };

    const handleDeleteUser = async (deleteId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/deleteUser/${deleteId}`);
            fetchUsers(); // Fetch updated users after deletion
            toast.success('User Deleted successfully');// Show success message
        } catch (error) {
            toast.error(error.response.data.error); // Show error message
        }
    };

    const handleChangeUserRole = async(formData) => {
        const { id, role } = formData;

        try {
            const response = await axios.post(`http://localhost:5000/changeUserRole/${id}`, { role });
            fetchUsers(); 
            toast.success("User updated Successfully");
        } catch (error) {
            toast.error(error.response.data.error);
            // Optionally handle error with toast or alert
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <ManagerHorizonatalBar />
            <div className="container mx-auto p-4">
                <AddUserForm onAddUser={handleAddUser} />
                <UpdateUserForm onUpdateUser={handleUpdateUser} />
                <DeleteUserForm onDeleteUser={handleDeleteUser} />
                <ChangeUserRoleForm onChangeUserRole={handleChangeUserRole} />
                <UserTable users={users} />
                {/* Other dashboard content */}
            </div>
        </div>
    );
};

export default ManagerDashboard;
