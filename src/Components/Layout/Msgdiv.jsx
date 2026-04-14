import React, { useEffect, useState } from "react";
import "./Msgdiv.css";
import MsgItem from "../Common/MsgItem";
import { supabase } from "../../supabaseClient";

const Msgdiv = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase
        .from("contact")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setMessages(data || []);
      }

      setLoading(false);
    }

    fetchMessages();
  }, []);

  async function deleteMessage(id) {
    const { error } = await supabase
      .from("contact")
      .delete()
      .eq("id", id);

    if (!error) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }
  }

  if (loading) return <p>Loading messages...</p>;
  if (messages.length === 0) return <p>No messages</p>;

  return (
    <div className="msg-container">
      <div className="msg-card">
        {messages.map((msg) => (
          <MsgItem
            key={msg.id}
            id={msg.id}
            name={msg.name}        // ✅ FROM DB
            title={msg.email}      // ✅ FROM DB
            preview={msg.message}  // ✅ FROM DB
            time={msg.number || "No number"}
            onDelete={deleteMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default Msgdiv;