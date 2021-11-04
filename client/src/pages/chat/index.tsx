import { useState } from "react";
import Chat from "./chat";
import * as io from "socket.io-client";
import "./index.css";

const socket = io.connect("http://localhost:4000");

const LiveChat: React.FC = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div className="Chat">
      {!showChat ? (
        <div className="Chat__container">
          <h1 className="title">Join A Chat</h1>
          <div className="joinChatContainer">
            <input
              className="input"
              type="text"
              placeholder="Write your name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="Write Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button className="joinRoom" onClick={joinRoom}>
              Join A Room
            </button>
          </div>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
};

export default LiveChat;
