const express = require('express');
const cors = require('cors');
const session = require('cookie-session');
const passport = require('passport');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
require('./config/passport'); // Import Passport configuration

const app = express();

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());
app.use(session({
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    keys: [process.env.JWT_SECRET], // Use a secure key
    secure: false, // Set to true if using HTTPS
    httpOnly: true, // Helps prevent XSS attacks
}));

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

module.exports = app;