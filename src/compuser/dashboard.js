import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality
    navigate('/user-login'); // Redirect to login page after logout
  };

  const handlePayment = () => {
    // Handle payment functionality
    navigate('/payment'); // Redirect to payment page
  };

  const handleUpdateGuestList = () => {
    // Handle update guest list functionality
    navigate('/update-guest-list'); // Redirect to update guest list page
  };

  const handleCheckStatus = () => {
    // Handle check status functionality
    navigate('/check-status'); // Redirect to check status page
  };

  return (
    <div className="user-main-page">
      <header className="user-header">
        <button onClick={() => navigate('/')} className="home-btn">Home</button>
        <h1>Welcome to User</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      <main className="user-content">
        <div className="card-container">
          <div className="card">
            <h2>Vendor</h2>
            <button onClick={() => navigate('/vendor')} className="card-btn">Manage Vendors</button>
          </div>
          <div className="card">
            <h2>Cart</h2>
            <div className="cart-details">
              <p>Total Amount: $0.00</p>
              <button onClick={handlePayment} className="card-btn">Payment</button>
              <button className="card-btn">Cancel</button>
            </div>
          </div>
          <div className="card">
            <h2>Guest List</h2>
            <button onClick={handleUpdateGuestList} className="card-btn">Update</button>
            <button className="card-btn">Delete</button>
          </div>
          <div className="card">
            <h2>Check Status</h2>
            <button onClick={handleCheckStatus} className="card-btn">Check</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;


