import React from "react";
import "./ProjectTable.css";
// import photoprojects from "../../Assets/photoprojects.svg";

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
    <div className="project-table-container">
      <table className="project-table">
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
                <img
          
                  alt="project"
                  className="project-image"
                />
              </td>

              <td>{item.tag}</td>
              <td>{item.description}</td>

              <td>
                <span
                  className={
                    item.status === "Published"
                      ? "status-published"
                      : "status-unpublished"
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
  );
};

export default ProjectTable;