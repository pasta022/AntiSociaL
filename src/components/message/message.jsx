import { useEffect, useState } from "react";
import "./message.css";
import { format } from "timeago.js";
import axios from "axios";

export default function Message({ message, own, currentchat, currentUser }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const friendId = currentchat.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(baseUrl + `/api/users?userId=${friendId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [currentchat, currentUser._id, baseUrl]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src={
            user?.profilePicture
              ? baseUrl + `/images/${user?.profilePicture}`
              : baseUrl + "/images/Person/10.png"
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
