const express = require('express');
const userRouter = require('./routes/userRoutes')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/api',userRouter);

// Add more routes here as needed


module.exports = app; // Export app for testing or other uses
