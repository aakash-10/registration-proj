// components/NavBar/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-indigo-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          My Learning App
        </Link>
        <div className="space-x-4">
          <Link to="/courses" className="text-white">
            Courses
          </Link>
          <Link to="/auth" className="text-white">
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
