import React from "react";
import "./Nav.css";

import logo from "../../Assets/logo.png";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import icon4 from "../../Assets/icon4.png";
import icon5 from "../../Assets/icon5.png";
import icon6 from "../../Assets/icon6.png";
import icon7 from "../../Assets/icon7.png";
import icon8 from "../../Assets/icon8.png";
import icon9 from "../../Assets/icon9.png";
import icon10 from "../../Assets/icon10.png";

const Nav = () => {
  return (
    <div className="sidebar">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="menu">

        <div className="item">
          <img src={icon1} alt="" />
          <p>Dashboard</p>
        </div>

        <div className="item">
          <img src={icon2} alt="" />
          <p>School Overview</p>
        </div>

        <div className="item">
          <img src={icon3} alt="" />
          <p>Classes</p>
        </div>

        <div className="item">
          <img src={icon4} alt="" />
          <p>Assignments</p>
        </div>

        <div className="item">
          <img src={icon5} alt="" />
          <p>Gradebook</p>
        </div>

        <div className="item">
          <img src={icon6} alt="" />
          <p>Attendance</p>
        </div>

        <div className="item">
          <img src={icon7} alt="" />
          <p>Messages</p>
        </div>

        <div className="item">
          <img src={icon8} alt="" />
          <p>Screens Website</p>
        </div>

        <div className="item">
          <img src={icon9} alt="" />
          <p>Screens App</p>
        </div>

        <div className="item">
          <img src={icon10} alt="" />
          <p>Settings</p>
        </div>

      </div>

    </div>
  );
};

export default Nav;