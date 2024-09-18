const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    allowNull: false
  },
  lastName: {
    type: String,
    allowNull: false
  },
  email: {
    type: String,
    allowNull: true, // Can be null if phone number is provided
    unique: true
  },
  phoneNumber: {
    type: String,
    allowNull: true, // Can be null if email is provided
    unique: true
  },
  password: {
    type: String,
    allowNull: false
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
