import React from "react";
import "./ActiveUsers.css";

const ActiveUsers = () => {
  return (
    <div className="active-users-card">
      <div className="active-users-graph">
        <div className="bar" style={{ height: "100px" }}></div>
        <div className="bar" style={{ height: "140px" }}></div>
        <div className="bar" style={{ height: "120px" }}></div>
        <div className="bar" style={{ height: "150px" }}></div>
        <div className="bar" style={{ height: "100px" }}></div>
        <div className="bar" style={{ height: "129px" }}></div>
        <div className="bar" style={{ height: "100px" }}></div>
        <div className="bar" style={{ height: "150px" }}></div>
      </div>
      <div className="active-users-text">
        <h2>Active Users</h2>
        <p>(+23) than last week</p>
      </div>
    </div>
  );
};

export default ActiveUsers;