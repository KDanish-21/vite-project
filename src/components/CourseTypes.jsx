import React, { useState } from 'react';

const CourseTypes = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [newCourseType, setNewCourseType] = useState('');


  const addCourseType = () => {
    if (newCourseType.trim() !== '') {
      setCourseTypes([...courseTypes, newCourseType.trim()]);
      setNewCourseType('');
    }
  };


  const deleteCourseType = (type) => {
    setCourseTypes(courseTypes.filter((t) => t !== type));
  };

  return (
    <div>
      <h2>Course Types</h2>
      <div>
        <input
          type="text"
          value={newCourseType}
          onChange={(e) => setNewCourseType(e.target.value)}
          placeholder="Enter course type"
        />
        <button onClick={addCourseType}>Add</button>
      </div>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type}
            <button onClick={() => deleteCourseType(type)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypes;
