import { useEffect, useState } from "react";
import "./chatOnline.css";
import axios from "axios";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  //get user friends
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(baseUrl + `/api/users/following/${currentId}`);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId, baseUrl]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers.includes(friend._id))
    );
  }, [friends, onlineUsers]);

  //set conversation
  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        baseUrl + `/api/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((onlineFriend) => (
        <div
          className="chatOnlineFriend"
          onClick={() => handleClick(onlineFriend)}
        >
          <div className="chatOnlineImgContainer">
            <img
              src={
                onlineFriend?.profilePicture
                  ? baseUrl + `/images/${onlineFriend?.profilePicture}`
                  : baseUrl + "/images/Person/10.png"
              }
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{onlineFriend?.username}</span>
        </div>
      ))}
    </div>
  );
}
