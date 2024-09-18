const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /signup - Create a new user
router
    .post('/signup', userController.signUp)
    .post('/login',userController.login)

module.exports = router;