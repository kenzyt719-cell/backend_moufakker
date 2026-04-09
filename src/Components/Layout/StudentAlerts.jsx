import React from "react";
import "./StudentAlerts.css";

const StudentAlerts = () => {
  return (
    <div className="student-alerts-container">
      <h2 className="alerts-title">Student Stress Alerts (AI Insights)</h2>

      <div className="alert-card">
        <div className="alert-info">
          <h3 className="student-name">Fatma Ibrahim</h3>
          <p className="student-grade">Grade 10-A</p>
          <p className="alert-description">Declining performance + low engagement</p>
        </div>
        <div className="risk-tag high-risk">High Risk</div>
      </div>

      <div className="alert-card">
        <div className="alert-info">
          <h3 className="student-name">Youssef Ahmed</h3>
          <p className="student-grade">Grade 11-B</p>
          <p className="alert-description">Increased absence pattern detected</p>
        </div>
        <div className="risk-tag medium-risk">Medium Risk</div>
      </div>

      <div className="alert-card">
        <div className="alert-info">
          <h3 className="student-name">Nour Hassan</h3>
          <p className="student-grade">Grade 10-B</p>
          <p className="alert-description">Mood indicators show stress signs</p>
        </div>
        <div className="risk-tag high-risk">High Risk</div>
      </div>
    </div>
  );
};

export default StudentAlerts;