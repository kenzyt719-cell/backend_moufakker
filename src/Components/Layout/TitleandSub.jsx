import React from "react";
import "./TitleandSub.css";

const TitleandSub = ({ title, subtitle }) => {
  return (
    <>
      <div className="titlemaindiv">
        <h1 className="titiilemain">{title}</h1>
        <h1 className="titiilemain2">{subtitle}</h1>
      </div>
    </>
  );
};

export default TitleandSub;