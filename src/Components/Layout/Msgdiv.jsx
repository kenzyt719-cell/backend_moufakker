import React, { useEffect, useState } from "react";
import "./Msgdiv.css";
import MsgItem from "../Common/MsgItem";

const Msgdiv = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
        msg: "Hello, I need help with my account.",
        created_at: "2026-04-09",
      },
      {
        id: 2,
        first_name: "Sara",
        last_name: "Ali",
        email: "sara@example.com",
        msg: "Can you assist me with my order?",
        created_at: "2026-04-08",
      },
      {
        id: 3,
        first_name: "Omar",
        last_name: "Hassan",
        email: "omar@example.com",
        msg: "This is an important message.",
        created_at: "2026-04-07",
      },
    ];

    setMessages(data);
    setLoading(false);
  }, []);

  function deleteMessage(id) {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  }

  if (loading) return <p>Loading...</p>;
  if (messages.length === 0) return <p>No messages</p>;

  return (
    <div className="msg-container">
      <div className="msg-card">
        {messages.map((msg) => (
          <MsgItem
            key={msg.id}
            id={msg.id}
            name={`${msg.first_name} ${msg.last_name}`}
            title={msg.email}
            preview={msg.msg}
            time={msg.created_at}
            onDelete={deleteMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default Msgdiv;