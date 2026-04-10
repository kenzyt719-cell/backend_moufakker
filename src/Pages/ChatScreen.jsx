import React, { useState } from "react";
import "./ChatScreen.css";
import Nav from "../Components/Layout/Nav";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "left", time: "10:23 AM" },
    { text: "Hi 👋", sender: "right", time: "10:24 AM" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMsg = {
      text: input,
      sender: "right",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <>
      <div className="home">

      <div className="layout">

     
        <Nav />
            <div className="content">



      <div className="chat-wrapper">

        {/* HEADER */}
        <div className="chat-header">
          <div className="back-arrow">&#8592;</div>

          <div className="user-info">
            <div className="avatar"></div>
            <div className="user-text">
              <div className="user-name">Nour Nasr</div>
              <div className="user-email">Nournasr@gmail.com</div>
            </div>
          </div>

          <div className="active-status">
            <div className="active-dot"></div>
            <div className="active-text">Active</div>
          </div>
        </div>

        {/* CHAT BODY */}
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`msg-row ${msg.sender}`}>
              <div className={`msg-box ${msg.sender === "left" ? "left-bg" : "right-bg"}`}>
                {msg.text}
              </div>
              <div className="msg-time">
                {msg.time} {msg.sender === "right" && "✔✔"}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="send-btn" onClick={handleSend}>
            &#9658;
          </button>
        </div>
      </div>
            </div>
    </div>
        </div>

    </>

  );
};

export default ChatScreen;