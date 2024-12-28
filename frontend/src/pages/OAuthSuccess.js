import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuthSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');

        if (token) {
            localStorage.setItem('token', token); // Save JWT to local storage
            navigate('/dashboard'); // Redirect to the dashboard
        } else {
            navigate('/login'); // Redirect back to login if no token
        }
    }, [navigate]);

    return <div>Loading...</div>;
};

export default OAuthSuccess;
