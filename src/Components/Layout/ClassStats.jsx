import React from "react";
import "./ClassStats.css";

const data = [
  { grade: "Grade 1", classes: 6, students: 192, avg: 32, teachers: 6, perf: "85%", att: "96%" },
  { grade: "Grade 2", classes: 6, students: 204, avg: 34, teachers: 6, perf: "83%", att: "95%" },
  { grade: "Grade 3", classes: 6, students: 198, avg: 33, teachers: 6, perf: "84%", att: "94%" },
  { grade: "Grade 4", classes: 6, students: 216, avg: 36, teachers: 6, perf: "82%", att: "93%" },
  { grade: "Grade 5", classes: 6, students: 222, avg: 37, teachers: 6, perf: "80%", att: "94%" },
  { grade: "Grade 6", classes: 6, students: 216, avg: 36, teachers: 6, perf: "81%", att: "93%" },
  { grade: "Grade 7", classes: 9, students: 297, avg: 33, teachers: 18, perf: "79%", att: "92%" },
  { grade: "Grade 8", classes: 9, students: 306, avg: 34, teachers: 18, perf: "82%", att: "93%" },
  { grade: "Grade 9", classes: 9, students: 289, avg: 32, teachers: 18, perf: "84%", att: "94%" },
  { grade: "Grade 10", classes: 7, students: 245, avg: 35, teachers: 18, perf: "83%", att: "95%" },
  { grade: "Grade 11", classes: 7, students: 238, avg: 34, teachers: 18, perf: "85%", att: "94%" },
  { grade: "Grade 12", classes: 7, students: 224, avg: 32, teachers: 18, perf: "87%", att: "96%" },
];

const ClassStats = () => {
  return (
    <div className="stats-wrapper">
      <h2 className="title">Class Distribution & Statistics</h2>

      <div className="table">

        {/* Header */}
        <div className="row header">
          <p>Grade Level</p>
          <p>Classes</p>
          <p>Students</p>
          <p>Avg Class Size</p>
          <p>Teachers</p>
          <p>Performance</p>
          <p>Attendance</p>
        </div>

        {/* Data */}
        {data.map((item, index) => (
          <div className="row" key={index}>
            <h4>{item.grade}</h4>
            <p>{item.classes}</p>
            <p>{item.students}</p>
            <p>{item.avg}</p>
            <p>{item.teachers}</p>
            <p>{item.perf}</p>
            <p>{item.att}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ClassStats;