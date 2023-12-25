import { useEffect, useState } from "react";
// import "./chatOnline.css";
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

  // set online friends
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
    <div>
      {onlineFriends.map((onlineFriend) => (
        <div
          className="flex items-center font-medium cursor-pointer mt-2.5"
          onClick={() => handleClick(onlineFriend)}
        >
          <div className="relative mr-2.5">
            <img
              src={
                onlineFriend?.profilePicture
                  ? onlineFriend?.profilePicture
                  : baseUrl + "/images/Person/10.png"
              }
              alt=""
              className="object-cover rounded-full h-9 w-9"
            />
            <div className="absolute h-2.5 w-2.5 rounded-full right-0 -top-[2px] border-solid border-2 border-white bg-[rgb(50,205,50)]"></div>
          </div>
          <span className="font-medium">{onlineFriend?.username}</span>
        </div>
      ))}
    </div>
  );
}
