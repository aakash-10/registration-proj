// pages/CourseListPage.js
import React from 'react';
import NavBar from '../Components/navbar/Navbar.js';
import Footer from '../Components/footer/Footer.js';
import CourseList from '../Components/CourseList/CourseList.js';

const courses = [
  { id: 1, title: 'Python for Malware', description: 'Description for Course 1' },
  { id: 2, title: 'Data Analytics', description: 'Description for Course 2' },
  // Add more courses
];

const CourseListPage = () => {
  return (
    <div>
      <NavBar />
      <CourseList courses={courses} />
      
    </div>
  );
};

export default CourseListPage;
