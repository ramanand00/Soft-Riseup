// src/Pages/Home.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
    <section className="home">
      <div className="home-content">
        <h1>Welcome to Soft-Riseup</h1>
        <p>Get started with our platform to create and manage your projects.</p>
        <button className="btn">Get Started</button>
      </div>
      <div className="home-image">
        <img src="https://via.placeholder.com/400" alt="Home" />
      </div>
      <div className="home-features">
        <h2>Features</h2>
        <ul>
          <li>Project Management</li>
          <li>Task Tracking</li>
          <li>Team Collaboration</li>
          <li>File Sharing</li>
        </ul>
      </div>
      <div className="home-contact">
        <h2>Contact Us</h2>
        <p>Email: info@soft-riseup.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      
    </section>
    </div>
  );
};

export default Home;
