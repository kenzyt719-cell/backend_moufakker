import React from "react";
import "./Box2home.css";

const Box2home = () => {
  return (
    <div className="box box2">
      <h2 className="title">Attendance Overview</h2>

      <div className="attendance-box">
        <div className="item-top">
          <p>Today's Attendance</p>
          <h3>92%</h3>
        </div>

        <div className="progress">
          <div className="progress-fill p92"></div>
        </div>
      </div>

      <div className="absent">
        <div className="absent-item">Ahmed Mohamed - Grade 10-A</div>
        <div className="absent-item">Sara Ali - Grade 11-B</div>
        <div className="absent-item">Omar Hassan - Grade 10-B</div>
      </div>
    </div>
  );
};

export default Box2home;