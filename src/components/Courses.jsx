import React, { useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');


  const addCourse = () => {
    if (newCourse.trim() !== '') {
      setCourses([...courses, newCourse.trim()]);
      setNewCourse('');
    }
  };


  const deleteCourse = (course) => {
    setCourses(courses.filter((c) => c !== course));
  };

  return (
    <div>
      <h2>Courses</h2>
      <div>
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Enter course name"
        />
        <button onClick={addCourse}>Add</button>
      </div>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => deleteCourse(course)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
