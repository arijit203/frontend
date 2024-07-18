import React, { useState } from 'react';

const DeleteUserForm = ({ onDeleteUser }) => {
    const [deleteId, setDeleteId] = useState('');

    const handleDeleteUser = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        onDeleteUser(deleteId);
        // Optionally, reset form fields after submission (not necessary for delete operation)
        setDeleteId('');
    };

    return (
        <>
            <form onSubmit={handleDeleteUser} className="space-y-4">
                <h2 className='text-lg font-semibold mt-5'>Delete User</h2>
                <input
                    type="text"
                    placeholder="User ID"
                    className="border p-2 mr-2"
                    value={deleteId}
                    onChange={(e) => setDeleteId(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Delete User
                </button>
            </form>
        </>
    );
};

export default DeleteUserForm;
