// NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">CourseEdu</div>
          <a href="#" className="text-white">Logout</a> 
          

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
