import React, { useState } from "react";
import { Users as friends } from "../dummyData";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

const Friends = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  // useEffect(() => {
  //   const getFriends = async () => {
  //     try {
  //       const friendList = await axios.get(`/users/following/${user?._id}`);
  //       setFriends(friendList.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getFriends();
  // }, [user]);

  return (
    <div className="w-full">
      {friends.map((friend) => (
        <div className="flex items-center p-2.5">
          <img
            src={
              friend.profilePicture
                ? PF + friend.profilePicture
                : PF + "person/10.png"
            }
            alt=""
            className="object-cover w-16 h-16 rounded-full"
          />
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start ml-4">
              <span className="text-base font-semibold">{friend.username}</span>
              <span className="text-sm font-normal">desc: hey boy</span>
            </div>
            <button
              className="md:mt-8 mb-2.5 border-none bg-customPrimary text-white rounded-md px-2.5 py-1.5 flex items-center text-base cursor-pointer font-medium"
              // onClick={handleClick}
            >
              Follow <Add />
              {/* {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />} */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
