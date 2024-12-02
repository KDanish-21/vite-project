
import React, { useState } from 'react';

const PublishableCourses = () => {
  const [courseTypes, setCourseTypes] = useState(['Individual', 'Group', 'Special']);
  const [courses, setCourses] = useState(['English', 'Hindi', 'Urdu']);
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [publishableCourses, setPublishableCourses] = useState([]);

  // Add a new publishable course
  const addPublishableCourse = () => {
    if (selectedCourseType && selectedCourse) {
      const newCourse = `${selectedCourseType}, ${selectedCourse}`;
      if (!publishableCourses.includes(newCourse)) {
        setPublishableCourses([...publishableCourses, newCourse]);
        setSelectedCourseType('');
        setSelectedCourse('');
      }
    }
  };

  // Delete a publishable course
  const deletePublishableCourse = (course) => {
    setPublishableCourses(publishableCourses.filter((c) => c !== course));
  };

  return (
    <div>
      <h2>Publishable Courses</h2>

      <div>
        {/* Dropdown for Course Types */}
        <select
          value={selectedCourseType}
          onChange={(e) => setSelectedCourseType(e.target.value)}
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Dropdown for Courses */}
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        {/* Add Button */}
        <button onClick={addPublishableCourse}>Add Publishable Course</button>
      </div>

      {/* List of Publishable Courses */}
      <ul>
        {publishableCourses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => deletePublishableCourse(course)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublishableCourses;
