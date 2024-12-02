// import React, { useState } from 'react';

// const StudentRegistrations = () => {
//   const [publishableCourses, setPublishableCourses] = useState([
//     'Individual, English',
//     'Group, Hindi',
//     'Special, Urdu',
//   ]);
//   const [selectedCourseType, setSelectedCourseType] = useState('');
//   const [filteredCourses, setFilteredCourses] = useState(publishableCourses);
//   const [studentName, setStudentName] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [registrations, setRegistrations] = useState([]);

//   // Filter courses based on course type
//   const filterCourses = (type) => {
//     setSelectedCourseType(type);
//     if (type === '') {
//       setFilteredCourses(publishableCourses);
//     } else {
//       setFilteredCourses(
//         publishableCourses.filter((course) => course.startsWith(type))
//       );
//     }
//   };

//   // Register a student for a course
//   const registerStudent = () => {
//     if (studentName && selectedCourse) {
//       setRegistrations([
//         ...registrations,
//         { name: studentName, course: selectedCourse },
//       ]);
//       setStudentName('');
//       setSelectedCourse('');
//     }
//   };

//   return (
//     <div>
//       <h2>Student Registrations</h2>

//       {/* Filter by Course Type */}
//       <div>
//         <label>Filter by Course Type: </label>
//         <select
//           value={selectedCourseType}
//           onChange={(e) => filterCourses(e.target.value)}
//         >
//           <option value="">All</option>
//           <option value="Individual">Individual</option>
//           <option value="Group">Group</option>
//           <option value="Special">Special</option>
//         </select>
//       </div>

//       {/* Select a Publishable Course */}
//       <div>
//         <label>Course: </label>
//         <select
//           value={selectedCourse}
//           onChange={(e) => setSelectedCourse(e.target.value)}
//         >
//           <option value="">Select a Course</option>
//           {filteredCourses.map((course, index) => (
//             <option key={index} value={course}>
//               {course}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Enter Student Name */}
//       <div>
//         <input
//           type="text"
//           value={studentName}
//           onChange={(e) => setStudentName(e.target.value)}
//           placeholder="Enter student name"
//         />
//         <button onClick={registerStudent}>Register</button>
//       </div>

//       {/* List of Registrations */}
//       <h3>Registrations</h3>
//       <ul>
//         {registrations.map((registration, index) => (
//           <li key={index}>
//             {registration.name} - {registration.course}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentRegistrations;

import React, { useState } from 'react';

const StudentRegistrations = () => {
  const [publishableCourses, setPublishableCourses] = useState([
    'Individual, English',
    'Group, Hindi',
    'Special, Urdu',
  ]);
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(publishableCourses);
  const [studentName, setStudentName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [errors, setErrors] = useState({ studentName: false, selectedCourse: false });

  // Filter courses based on course type
  const filterCourses = (type) => {
    setSelectedCourseType(type);
    if (type === '') {
      setFilteredCourses(publishableCourses);
    } else {
      setFilteredCourses(
        publishableCourses.filter((course) => course.startsWith(type))
      );
    }
  };

  // Register a student for a course
  const registerStudent = () => {
    const hasErrors = {
      studentName: studentName.trim() === '',
      selectedCourse: selectedCourse.trim() === '',
    };
    setErrors(hasErrors);

    if (!hasErrors.studentName && !hasErrors.selectedCourse) {
      setRegistrations([
        ...registrations,
        { name: studentName, course: selectedCourse },
      ]);
      setStudentName('');
      setSelectedCourse('');
    }
  };

  return (
    <div>
      <h2>Student Registrations</h2>

      {/* Filter by Course Type */}
      <div>
        <label>Filter by Course Type: </label>
        <select
          value={selectedCourseType}
          onChange={(e) => filterCourses(e.target.value)}
        >
          <option value="">All</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
          <option value="Special">Special</option>
        </select>
      </div>

      {/* Select a Publishable Course */}
      <div>
        <label>Course: </label>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{
            borderColor: errors.selectedCourse ? 'red' : '#ccc',
            borderWidth: errors.selectedCourse ? '2px' : '1px',
          }}
        >
          <option value="">Select a Course</option>
          {filteredCourses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {/* Enter Student Name */}
      <div>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter student name"
          style={{
            borderColor: errors.studentName ? 'red' : '#ccc',
            borderWidth: errors.studentName ? '2px' : '1px',
          }}
        />
        <button onClick={registerStudent}>Register</button>
      </div>

      {/* List of Registrations */}
      <h3>Registrations</h3>
      <ul>
        {registrations.map((registration, index) => (
          <li key={index}>
            {registration.name} - {registration.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentRegistrations;

