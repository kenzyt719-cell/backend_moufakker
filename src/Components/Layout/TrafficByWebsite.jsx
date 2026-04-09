import React from "react";
import "./TrafficByWebsite.css";

const TrafficByWebsite = () => {
  const websites = [
    { name: "Instagram", value: 70 },
    { name: "Facebook", value: 60 },
    { name: "Google", value: 50 },
    { name: "Chrome", value: 40 },
    { name: "Safari", value: 35 },
    { name: "Chrome", value: 30 },
  ];

  return (
    <div className="traffic-card">
      <h2>Traffic by Website</h2>
      {websites.map((site, index) => (
        <div className="traffic-row" key={index}>
          <p>{site.name}</p>
          <div className="traffic-bar-bg">
            <div
              className="traffic-bar-fill"
              style={{ width: `${site.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrafficByWebsite;