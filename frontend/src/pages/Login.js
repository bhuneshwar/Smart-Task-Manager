// frontend/src/pages/Login.js

import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            console.log('User logged in:', response.data);
            // Handle successful login (e.g., store token, redirect to dashboard)
        } catch (error) {
            console.error('Login error:', error.response.data);
        }
    };

    const googleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            <button onClick={googleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;