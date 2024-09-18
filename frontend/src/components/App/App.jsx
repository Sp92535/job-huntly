import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from '../SignUp/SignUp';
import Navbar from '../Navbar/Navbar'; // Import your Navbar component
import Footer from '../Footer/Footer'; // Import your Footer component
import Login from '../Login/Login'; // Import your Login component
import HomePage from '../HomePage/HomePage'; // Import your Login component


import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
