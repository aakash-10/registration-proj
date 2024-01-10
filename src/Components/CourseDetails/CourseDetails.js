// components/CourseDetails/CourseDetails.js
import React from 'react';

const CourseDetails = ({ course }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700">{course.description}</p>
      {/* Add more details like instructor, rating, syllabus, etc. */}
      <button className="bg-indigo-500 text-white p-2 rounded-md">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
