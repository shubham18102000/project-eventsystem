import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import LoginOptions from './components/LoginOption'; // Ensure this import path is correct
import Footer from './components/Footer';
import VendorMainPage from './compvendor/VendorMainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorLogin from './components/VendorLogin';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import UserDashboard from './compuser/dashboard';

import AdminPage from './compadmin/AdminPage';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<LoginOptions />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/vendor-dashboard" element={<VendorMainPage />} />
          <Route path='/dashboard' element={<UserDashboard/>} />
          <Route path='admin-page' element={<AdminPage/>}/>
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
