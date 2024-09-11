import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Event-management</h1>
      <ul>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
