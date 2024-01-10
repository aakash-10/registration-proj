// pages/Home.js
import React from 'react';
import NavBar from '../Components/navbar/Navbar.js';
import Footer from '../Components/footer/Footer.js';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Learning Platform</h1>
        <p className="text-gray-700">Explore courses and enhance your skills.</p>
      </div>
    
    </div>
  );
};

export default Home;
