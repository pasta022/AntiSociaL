import React, { useEffect, useState } from "react";
// import "./conversation.css";
import axios from "axios";

export default function Conversation({ conversation, currentUser }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // get friend
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(baseUrl + `/api/users?userId=${friendId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [baseUrl, conversation, currentUser._id]);

  return (
    <div className="flex items-center cursor-pointer p-2.5 mt-5 hover:bg-hoverColor">
      <img
        className="object-cover w-10 h-10 mr-5 rounded-full"
        src={
          user?.profilePicture
            ? baseUrl + `/images/${user?.profilePicture}`
            : baseUrl + "/images/Person/10.png"
        }
        alt=""
      />
      <span className="font-medium">{user?.username}</span>
    </div>
  );
}
