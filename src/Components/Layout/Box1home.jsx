import React from "react";
import "./Box1home.css";

const Box1home = () => {
  return (
    <div className="box box1">
      <h2 className="title">Class Performance Summary</h2>

      <div className="item">
        <div className="item-top">
          <h3>Grade 10-A</h3>
          <p>42 students</p>
        </div>
        <div className="progress">
          <div className="progress-fill p70"></div>
        </div>
      </div>

      <div className="item">
        <div className="item-top">
          <h3>Grade 10-B</h3>
          <p>42 students</p>
        </div>
        <div className="progress">
          <div className="progress-fill p85"></div>
        </div>
      </div>

      <div className="item">
        <div className="item-top">
          <h3>Grade 11-A</h3>
          <p>42 students</p>
        </div>
        <div className="progress">
          <div className="progress-fill p80"></div>
        </div>
      </div>
    </div>
  );
};

export default Box1home;