import React from 'react';
import styles from './SignUp.module.css'; // Import your CSS module
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className={styles.signupContainer}>
      <h2 className="text-center mb-4">Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className={`form-label ${styles.formLabel}`}>First Name</label>
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            id="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="lastName" className={`form-label ${styles.formLabel}`}>Last Name</label>
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            id="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailOrPhone" className={`form-label ${styles.formLabel}`}>Email or Phone Number</label>
          <input
            type="text"
            className={`form-control ${styles.formControl}`}
            id="emailOrPhone"
            placeholder="Enter your email or phone number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className={`form-label ${styles.formLabel}`}>Password</label>
          <input
            type="password"
            className={`form-control ${styles.formControl}`}
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${styles.btnPrimary} w-100`}
        >
          Sign Up
        </button>
      </form>

      <div className={`mt-3 ${styles.loginPrompt}`}>
        <p className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
