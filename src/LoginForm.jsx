import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { jwtDecode } from "jwt-decode";

import './LoginForm.css';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/login', data);
            // console.log('Login response:', response.data);
            localStorage.setItem('accessToken', response.data.accessToken);
            
            navigate('/manager_dashboard');
            toast.success("Logged In Successfully!")
        } catch (error) {
            console.error('Login error:', error);
            toast.error("Login Error")
        }
    };

    return (
        <div className="login-form">
            <h2 className='text-lg'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: 'Email is required' })}
                        className="border p-2 mb-2"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: 'Password is required' })}
                        className="border p-2 mb-2"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
