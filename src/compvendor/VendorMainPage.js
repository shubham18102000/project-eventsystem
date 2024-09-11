import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Vendor.css';

const VendorMainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality
    navigate('/vendor-login'); // Redirect to login page after logout
  };

  const handleInsertItem = () => {
    // Handle insert item functionality
    navigate('/insert-item'); // Redirect to insert item page
  };

  const handleDeleteItem = () => {
    // Handle delete item functionality
    navigate('/delete-item'); // Redirect to delete item page
  };

  const handleAddNewItem = () => {
    // Handle add new item functionality
    navigate('/add-new-item'); // Redirect to add new item page
  };

  const handleViewProduct = () => {
    // Handle view product functionality
    navigate('/view-product'); // Redirect to view product page
  };

  const handleTransaction = () => {
    // Handle transaction with user requests
    navigate('/transaction'); // Redirect to transaction page
  };

  return (
    <div className="vendor-main-page">
      <header className="vendor-header">
        <button onClick={() => navigate('/')} className="home-btn">Home</button>
        <h1>Welcome to Vendor</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      <main className="vendor-content">
        <div className="card">
          <h2>Your Items</h2>
          <button onClick={handleInsertItem} className="action-btn">Insert Item</button>
          <button onClick={handleDeleteItem} className="action-btn">Delete Item</button>
        </div>
        <div className="card">
          <h2>Add New Item</h2>
          <button onClick={handleAddNewItem} className="action-btn">Product Request Item</button>
          <button onClick={handleViewProduct} className="action-btn">View Product</button>
        </div>
        <div className="card">
          <h2>Transaction</h2>
          <button onClick={handleTransaction} className="action-btn">User Request</button>
        </div>
      </main>
    </div>
  );
};

export default VendorMainPage;

