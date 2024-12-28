const express = require('express');
const session = require('cookie-session');
const passport = require('passport');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
require('./config/passport'); // Import Passport configuration

const app = express();

app.use(express.json());
app.use(session({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.JWT_SECRET],
}));

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

module.exports = app;