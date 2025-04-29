import React from "react";
import NavButtons from "./NavButtons.js";
import "../styles/App.css";

export default function Page2({ courses, setCourses }) {
  const [education, setEducation] = React.useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCourse((prev) => [...prev, education]);
    setEducation({
      courseName: "",
      completionYear: "",
      college: "",
      percentage: "",
    });
  }

  return (
    <>
      <h2>Add your Education details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Name*"
          name="courseName"
          required
          value={education.courseName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Completion Year*"
          name="completionYear"
          value={education.completionYear}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="College/School*"
          name="college"
          value={education.college}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Percentage*"
          name="percentage"
          value={education.percentage}
          onChange={handleChange}
        />
        <div className="navButtons">
          <button id="delete">DELETE</button>
          <button type="submit" id="add_education">
            ADD EDUCATION
          </button>
        </div>
      </form>

      <h3>Added Courses:</h3>
      <ul>
        {courses.length > 0 && (
          courses.map((edu, index) => (
            <li key={index}>
              <strong>{edu.courseName}</strong> ({edu.completionYear}) - {edu.college} - {edu.percentage}%
            </li>
          ))
        )}
      </ul>


      <NavButtons page={1} />
    </>
  );
}
