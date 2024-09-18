import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css'; // Import your CSS module

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2 className="text-center mb-4">Login</h2>
      <form>
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
          Login
        </button>
      </form>

      <div className={`mt-3 ${styles.signupPrompt}`}>
        <p className="text-center">
          Don't have an account yet? <Link to="/signup">Create Account</Link>
        </p>
        <p className="text-center mt-2">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
