import React from 'react';
import './adminPage.css';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality
    navigate('/admin-login'); // Redirect to login page after logout
  };

  const handleMaintainUser = () => {
    // Navigate to maintain user page
    navigate('/maintain-user');
  };

  const handleMaintainVendor = () => {
    // Navigate to maintain vendor page
    navigate('/maintain-vendor');
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
      <button onClick={() => navigate('/')} className="home-btn">Home</button>
        <h1>Welcome Admin</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      <main className="admin-content">
        <button onClick={handleMaintainUser} className="action-btn">Maintain User</button>
        <button onClick={handleMaintainVendor} className="action-btn">Maintain Vendor</button>
      </main>
    </div>
  );
};

export default AdminPage;
