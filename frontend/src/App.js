import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import OAuthSuccess from './pages/OAuthSuccess';
import Dashboard from './pages/Dashboard'; // Assume you have a Dashboard component

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/oauth-success" element={<OAuthSuccess />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;