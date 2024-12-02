import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CourseTypes from './components/CourseTypes';
import Courses from './components/Courses';
import PublishableCourses from './components/PublishableCourses';
import StudentRegistrations from './components/StudentRegistrations';

function App() {
  return (
    <div>
      {}
      <nav>
        <Link to="/">Course Types</Link> | 
        <Link to="/courses">Courses</Link> | 
        <Link to="/publishable-courses">Publishable Courses</Link> | 
        <Link to="/student-registrations">Student Registrations</Link>
      </nav>

      

      {}
      <Routes>
        <Route path="/" element={<CourseTypes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/publishable-courses" element={<PublishableCourses />} />
        <Route path="/student-registrations" element={<StudentRegistrations />} />
      </Routes>
    </div>
  );
}

export default App;
