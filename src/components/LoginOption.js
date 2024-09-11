// components/LoginOptions.js
import React from 'react';
import './styles.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';


const LoginOptions = () => {
  const handleLoginClick = (path) => {
    window.open(path, '_blank'); // Open the path in a new tab
  };

  return (
    <>
    <Navbar/>
    <Hero/>
    <section className="login-options" id="login">
      <h2>Select Your Login</h2>
      <div className="login-cards">
        <div className="card" onClick={() => handleLoginClick('/vendor-login')}>
          <h3>Vendor Login</h3>
          <p>Access your vendor portal to manage products and transactions.</p>
          <a href="#" className="btn">Vendor Login</a>
        </div>
        <div className="card" onClick={() => handleLoginClick('/user-login')}>
          <h3>User Login</h3>
          <p>Access your user account to manage orders and view vendors.</p>
          <a href="#" className="btn">User Login</a>
        </div>
        <div className="card" onClick={() => handleLoginClick('/admin-login')}>
          <h3>Admin Login</h3>
          <p>Manage users, vendors, and the platform as an admin.</p>
          <a href="#" className="btn">Admin Login</a>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default LoginOptions;
