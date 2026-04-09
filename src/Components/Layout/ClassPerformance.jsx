import React from "react";
import "./ClassPerformance.css";

const ClassPerformance = ({ title, classes }) => {
  return (
    <div className="performance-card">
      <h2 className="performance-title">{title}</h2>

      {(classes || []).map((cls, index) => (
        <div className="class-row" key={index}>
          <h3 className="class-name">{cls.name}</h3>
          <p className="student-count">{cls.students} students</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ "--fill-width": `${cls.percentage}%`, animationDelay: `${index * 0.2}s` }}
            ></div>
          </div>
        </div>
      ))}

      {/* Optional message if no classes */}
      {(!classes || classes.length === 0) && <p>No classes yet.</p>}
    </div>
  );
};

export default ClassPerformance;