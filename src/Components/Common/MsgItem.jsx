import React from "react";
import "./MsgItem.css";
import trash from "../../Assets/trash.svg";

const MsgItem = ({ id, name, title, preview, time, onDelete }) => {
  return (
    <div className="msg-item">
      <div className="msg-left">
        <div className="msg-avatar">
          {name?.charAt(0)}
        </div>

        <div className="msg-text">
          <h3 className="msg-name">{name}</h3>
          <p className="msg-title">{title}</p>
        </div>
      </div>

      <div className="msg-middle">
        <p className="msg-preview">{preview}</p>
      </div>

      <div className="msg-right">
        <span className="msg-time">{time}</span>

        <img
          src={trash}
          alt="delete"
          className="delete-icon"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

export default MsgItem;