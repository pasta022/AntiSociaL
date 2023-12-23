import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import ChatOnline from "../components/chatOnline";
import Conversation from "../components/conversation";
import Message from "../components/message";
import TopBar from "../components/topbar";
// import "./messenger.css";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { io } from "socket.io-client";
import { ArrowBackIosNew } from "@mui/icons-material";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [showChats, setShowChats] = useState(false)
  const socket = useRef();
  const scrollRef = useRef();
  const { user } = useContext(AuthContext);

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

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
        const res = await axios.get(baseUrl + `/api/conversations/${user?._id}`);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [baseUrl, user]);

  //function to get messages from database
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(baseUrl + `/api/messages/${currentChat?._id}`);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMessages();
  }, [baseUrl, currentChat]);

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
      const res = await axios.post(baseUrl + "/api/messages", message);
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

  // show chats when conversation is clicked
  const slideIntoChat = () => {
    setShowChats(true)
  }

  // go away from chats
  const slideOutOfChat = () => {
    setShowChats(false)
  }

  return (
    <>
      <TopBar />
      <div style={{ overflow: "hidden" }}>
        <div className={`flex ${showChats ? "-translate-x-[100vw]" : "translate-x-0"} transition-transform duration-500 will-change-transform`} style={{ height: "calc(100vh - 70px)" }}>
          <div className="md:flex-[3.5] w-full md:w-auto">
            <div className={`w-screen  md:w-auto`}>
              <div className="h-full p-2.5">
                <input
                  type="search"
                  placeholder="Search For Friends"
                  className="px-0 py-2.5 w-[90%] border-b-[1px] border-solid border-t-0 border-x-0 border-[rgb(128,128,128)]"
                />
                {conversations.map((c, index) => (
                  <div onClick={() => {
                    // eslint-disable-next-line no-unused-expressions
                    !window.matchMedia("(min-width: 768px)").matches ? slideIntoChat() : null
                    setCurrentChat(c)
                  }}>
                    <Conversation conversation={c} currentUser={user} key={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex-[5.5] w-full md:w-auto">
            <div className={`relative flex flex-col w-screen md:w-auto p-2.5 h-full transition-transform duration-500`}>
              {currentChat ? (
                <>
                  <div className="absolute z-20 flex items-center justify-center w-10 h-10 text-white rounded-full bg-customPrimary top-5 md:hidden" onClick={slideOutOfChat}>
                    <ArrowBackIosNew />
                  </div>
                  <div className="h-full overflow-y-scroll">
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
                  <div className="flex mt-2.5 items-center justify-between">
                    <textarea
                      placeholder="Enter message here..."
                      className="w-4/5 h-[90px] p-2.5"
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>
                    <button className="w-[70px] h-10 border-none rounded cursor-pointer text-white bg-[#306130]" onClick={sendMessage}>
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <span className="absolute top-[15%] text-5xl text-textTertiary cursor-default">
                  Open a conversation to start a chat
                </span>
              )}
            </div>
          </div>
          <div className="md:flex-[3] hidden md:block">
            <div className="h-full p-2.5">
              <ChatOnline
                onlineUsers={onlineUsers}
                currentId={user._id}
                setCurrentChat={setCurrentChat}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
