// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CourseListPage from './pages/CourseListPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseListPage />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        {/* Footer will stick to the bottom */}
      
          {/* Your footer content goes here */}
          <footer style={{marginTop: 'auto'}} className="bg-indigo-800 p-4 text-white text-center">
      <p>&copy; 2024 CourseEdu. All rights reserved.</p>
    </footer>
      </div>
    </Router>
  );
};

export default App;
