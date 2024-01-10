// pages/CourseDetailsPage.js
import React from 'react';
import NavBar from '../Components/navbar/Navbar.js';
import Footer from '../Components/footer/Footer.js';
import CourseDetails from '../Components/CourseDetails/CourseDetails.js';

const selectedCourse = { id: 1, title: 'Course 1', description: 'Description for Course 1' };

const CourseDetailsPage = () => {
  return (
    <div>
      <NavBar />
      <CourseDetails course={selectedCourse} />
    
    </div>
  );
};

export default CourseDetailsPage;
