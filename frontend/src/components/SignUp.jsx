import React, { useState } from 'react';
import '../css/SignUp.css'; // Import your custom styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleInputChange} 
                required 
                placeholder="Enter first name" 
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleInputChange} 
                required 
                placeholder="Enter last name" 
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="emailOrPhone">Email or Phone Number</label>
              <input 
                type="text" 
                className="form-control" 
                name="emailOrPhone" 
                value={formData.emailOrPhone} 
                onChange={handleInputChange} 
                required 
                placeholder="Enter email or phone number" 
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                className="form-control" 
                name="password" 
                value={formData.password} 
                onChange={handleInputChange} 
                required 
                placeholder="Enter password" 
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
          </form>

          <div className="text-center mb-3">
            <span>OR</span>
          </div>

          <button className="btn btn-danger w-100" onClick={handleGoogleSignUp}>
            Sign Up with Google
          </button>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
