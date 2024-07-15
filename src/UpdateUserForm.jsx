import React, { useState } from 'react';

const UpdateUserForm = ({ onUpdateUser }) => {
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        role: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onUpdateUser(formData);
        // Optionally, reset form fields after submission
        setFormData({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            role: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mt-5">Update User</h2>
            <input type="number" id="id" placeholder="Uid" className="border p-2 mr-1" value={formData.id} onChange={handleInputChange} required />
            <input type="text" id="firstName" placeholder="First Name" className="border p-2 m-2 mr-1" value={formData.firstName} onChange={handleInputChange} />
            <input type="text" id="lastName" placeholder="Last Name" className="border p-2 m-2 mr-1" value={formData.lastName} onChange={handleInputChange} />
            <input type="email" id="email" placeholder="Email" className="border p-2 m-2 mr-1" value={formData.email} onChange={handleInputChange} required />
            <input type="password" id="password" placeholder="Password" className="border p-2 m-2 mr-1" value={formData.password} onChange={handleInputChange} />
            <input type="text" id="address" placeholder="Address" className="border p-2 m-2 mr-1" value={formData.address} onChange={handleInputChange} />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update User</button>

          
        </form>
    );
};

export default UpdateUserForm;
