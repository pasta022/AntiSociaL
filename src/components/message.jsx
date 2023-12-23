import { useEffect, useState } from "react";
// import "./message.css";
import { format } from "timeago.js";
import axios from "axios";

export default function Message({ message, own, currentchat, currentUser }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // get friend
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
    <div className={/*own ? "message own" : "message"*/`flex flex-col mt-5 ${own && "items-end"}`}>
      <div className="flex">
        <img
          src={
            user?.profilePicture
              ? baseUrl + `/images/${user?.profilePicture}`
              : baseUrl + "/images/Person/10.png"
          }
          alt=""
          className={`h-8 w-8 rounded-full object-cover mr-2.5 ${own && "hidden"}`}
        />
        <p className={`p-2.5 rounded-[20px]  max-w-[300px] text-[15px] ${own ? "text-black" : "text-white"} ${own ? "bg-chatColor" : "bg-customPrimary "}`}>{message.text}</p>
      </div>
      <div className="text-xs mt-2.5">{format(message.createdAt)}</div>
    </div>
  );
}
