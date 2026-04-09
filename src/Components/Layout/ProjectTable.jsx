import React from "react";
import "./ProjectTable.css";

const ProjectTable = () => {
  const projects = [
    {
      id: 1,
      tag: "UI/UX",
      description: "Design system for mobile app",
      status: "Published",
    },
    {
      id: 2,
      tag: "Web",
      description: "Landing page for startup",
      status: "Unpublished",
    },
    {
      id: 3,
      tag: "Branding",
      description: "Full brand identity",
      status: "Published",
    },
  ];

  return (
    <div className="table-container">
      <div className="table-card">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
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
                  <div className="img-box">
                    <span>Upload</span>
                  </div>
                </td>

                <td>
                  <span className="text">{item.tag}</span>
                </td>

                <td>
                  <span className="text">{item.description}</span>
                </td>

                <td>
                  <span
                    className={
                      item.status === "Published"
                        ? "status published"
                        : "status unpublished"
                    }
                  >
                    {item.status}
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