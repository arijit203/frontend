import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        roleId: '',
        phone_no:'',
        deviceId:''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddUser(formData);
        // Reset form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            roleId: '',
            phone_no:'',
            deviceId:''
        });
    };

    return (
        <>
            <h2 className="text-lg font-semibold mb-0">Add User</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="border p-2  mr-1"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="border p-2 m-1 mr-1"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="border p-2 m-1 mr-1"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="border p-2 m-1 mr-1"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    className="border p-2 m-1 mr-1"
                    value={formData.address}
                    onChange={handleInputChange}
                />
                
                <input
                    type="text"
                    id="phone_no"
                    placeholder="Phone No"
                    className="border p-2 m-1 mr-1"
                    value={formData.phone_no}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id="deviceId"
                    placeholder="Device Id"
                    className="border p-2 m-1 mr-1"
                    value={formData.deviceId}
                    onChange={handleInputChange}
                />
                {/* <input
                    type="text"
                    id="role"
                    placeholder="Role"
                    className="border p-2 m-1 mr-1"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                /> */}
                
                    <select
                        id="role"
                        className="border p-2 m-1 mr-2"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                    >
                        <option value=""  className=" text-gray-500" >Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Field Staff">Field Staff</option>
                    </select>

                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add User
                </button>

            </form>
        </>
    );
};

export default AddUserForm;
