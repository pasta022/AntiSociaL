import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import ChatOnline from "../../components/chatOnline/chatOnline";
import Conversation from "../../components/conversation/conversation";
import Message from "../../components/message/message";
import TopBar from "../../components/topbar/topbar";
import "./messenger.css";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();
  const { user } = useContext(AuthContext);

  //component hooks

  //set socket
  useEffect(() => {
    socket.current = io("ws://localhost:8080");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        conversationId: currentChat?._id,
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [currentChat]);

  //
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.senderId) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  //function to get conversations from database
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/conversations/${user?._id}`);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user]);

  //function to get messages from database
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/messages/${currentChat?._id}`);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMessages();
  }, [currentChat]);

  //function to send message when send button is clicked
  const sendMessage = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      senderId: user._id,
      text: newMessage,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  //scroll to the last sent message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  });

  //send userId to and receive users from socket server
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.following.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  return (
    <>
      <TopBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuContainer">
            <input
              type="search"
              placeholder="Search For Friends"
              className="chatMenuSearch"
            />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxContainer">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message
                        message={m}
                        own={m.senderId === user._id}
                        currentchat={currentChat}
                        currentUser={user}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="Enter message here..."
                    className="chatBoxBottomMessage"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatBoxBottomButton" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversation">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnineContainer">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}
