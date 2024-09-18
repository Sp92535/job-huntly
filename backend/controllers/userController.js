const User = require('../models/userModel');
const bcrypt = require('bcryptjs'); // Use bcryptjs instead of bcrypt


// Function to handle user signup
exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const user = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password: hashedPassword
    });

    res.status(201).json(user);

  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, phoneNumber, password } = req.body;

  try {
      // Find the user by email or phoneNumber
      const user = await User.findOne({ 
          $or: [{ email }, { phoneNumber }] 
      });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Check if the provided password matches the hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // If login is successful
      return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};