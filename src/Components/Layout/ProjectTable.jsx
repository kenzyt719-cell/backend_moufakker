import React, { useEffect, useState } from "react";
import "./ProjectTable.css";
import { supabase } from "../../supabaseClient";


const ProjectTable = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchScreens();
  }, []);

  const fetchScreens = async () => {
    const { data, error } = await supabase
      .from("screens_web")
      .select("*");

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setProjects(data);
    }
  };

  return (
    <div className="table-container">
      <div className="table-card">
        <table className="table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Description</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="text">{item["screen name"]}</span>
                </td>

                <td>
                  <span className="text">{item.description}</span>
                </td>

                <td>
                  <span
                    className={
                      item.state === "Published"
                        ? "status published"
                        : "status unpublished"
                    }
                  >
                    {item.state}
                  </span>
                </td>

                <td>
                  <button className="edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;