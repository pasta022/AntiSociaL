import { useEffect, useState } from "react";
import "./message.css";
import { format } from "timeago.js";
import axios from "axios";

export default function Message({ message, own, currentchat, currentUser }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = currentchat.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(`/users?userId=${friendId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [currentchat, currentUser._id]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src={
            user?.profilePicture
              ? PF + user?.profilePicture
              : PF + "/person/10.png"
          }
          alt=""
          className="messageTopImg"
        />
        <p className="messageTopText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
