import React, { useState } from "react";
import "./EditSection.css";

const EditSection = () => {
  const [selectedProject, setSelectedProject] = useState({
    Title1: "",
    Image1: "",
    description1: "",
    Title2: "",
    img2: "",
    description2: "",
    title3: "",
    img3: "",
    description3: ""
  });

  const [saving, setSaving] = useState(false);

  const updateField = (field, value) => {
    setSelectedProject({ ...selectedProject, [field]: value });
  };

  const handleSave = () => {
    setSaving(true);

    alert("Saved (UI only)");
    console.log(selectedProject);

    setSaving(false);
  };

  return (
    <div className="edit-container">

      <div className="edit-card">

        {/* Title 1 */}
        <label className="label">Title 1</label>
        <input
          className="input"
          type="text"
          value={selectedProject.Title1}
          onChange={(e) => updateField("Title1", e.target.value)}
        />

        {/* Image 1 */}
        <label className="label">Image 1</label>
        <div className="upload-box">
          {selectedProject.Image1 ? (
            <img src={selectedProject.Image1} className="preview-img" alt="" />
          ) : (
            "Upload Image"
          )}
        </div>

        {/* Description 1 */}
        <DescriptionEditor
          description={selectedProject.description1}
          onChange={(val) => updateField("description1", val)}
        />

        {/* Title 2 */}
        <label className="label">Title 2</label>
        <input
          className="input"
          type="text"
          value={selectedProject.Title2}
          onChange={(e) => updateField("Title2", e.target.value)}
        />

        {/* Image 2 */}
        <label className="label">Image 2</label>
        <div className="upload-box">
          {selectedProject.img2 ? (
            <img src={selectedProject.img2} className="preview-img" alt="" />
          ) : (
            "Upload Image"
          )}
        </div>

        {/* Description 2 */}
        <DescriptionEditor
          description={selectedProject.description2}
          onChange={(val) => updateField("description2", val)}
        />

        {/* Title 3 */}
        <label className="label">Title 3</label>
        <input
          className="input"
          type="text"
          value={selectedProject.title3}
          onChange={(e) => updateField("title3", e.target.value)}
        />

        {/* Image 3 */}
        <label className="label">Image 3</label>
        <div className="upload-box">
          {selectedProject.img3 ? (
            <img src={selectedProject.img3} className="preview-img" alt="" />
          ) : (
            "Upload Image"
          )}
        </div>

        {/* Description 3 */}
        <DescriptionEditor
          description={selectedProject.description3}
          onChange={(val) => updateField("description3", val)}
        />

<div className="divbuttonedit">
  <button className="save-btn" onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>

</div>
      
      </div>

    </div>
  );
};

export default EditSection;

/* ===== Description Editor ===== */
const DescriptionEditor = ({ description, onChange }) => {
  return (
    <div className="field">
      <label className="label">Description Area</label>

      <div className="desc-container">
        <div className="desc-toolbar">

          <select className="font-size-select">
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>

          <select className="heading-select">
            <option>H2</option>
            <option>H3</option>
            <option>H4</option>
          </select>

          <div className="tool-group">
            <button className="tool-btn">B</button>
            <button className="tool-btn">I</button>
            <button className="tool-btn">U</button>
            <button className="tool-btn">S</button>
          </div>

          <div className="tool-group">
            <button className="tool-btn">≡</button>
            <button className="tool-btn">≣</button>
            <button className="tool-btn">1.</button>
            <button className="tool-btn">•</button>
          </div>

          <div className="tool-group right">
            <button className="tool-btn">🖼️</button>
            <button className="tool-btn">🔗</button>
          </div>

        </div>

        <textarea
          className="desc-textarea"
          value={description}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};