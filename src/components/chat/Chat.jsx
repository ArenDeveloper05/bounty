import React, { useState } from "react";
import "./Chat.scss";
import { BsChatTextFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { postChatMessage } from "../../api";
const Chat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { message: "asdadas" },
    { message: "aAAAA" },
  ]);
  const [message, setMessage] = useState([]);

  const sendMessage = async () => {
    try {
      const data = await postChatMessage({ message });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chat">
      {!chatOpen ? (
        <span>
          <BsChatTextFill onClick={() => setChatOpen((prev) => !prev)} />
        </span>
      ) : (
        <div className="chat-product">
          <div
            className="chat-product-close"
            onClick={() => setChatOpen((prev) => !prev)}
          >
            <AiOutlineCloseCircle />
          </div>
          <ul>
            {messages.map((item, idx) => {
              return <li key={idx}>{item.message}</li>;
            })}
          </ul>
          <div className="chat-product-write">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
