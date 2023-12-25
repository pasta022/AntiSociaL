import React, { useContext, useState } from "react";
// import { Users as friends } from "../dummyData";
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const Friends = ({ friend }) => {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext)

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [followed, setFollowed] = useState(
    currentUser.following.includes(friend._id)
  );

  // follow user
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${friend._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: friend._id });
      } else {
        await axios.put(`/users/${friend._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: friend._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };
  // const [friends, setFriends] = useState([]);

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
    <>
      <div className="flex items-center p-2.5">
        <Link to={`/profile/${friend.username}`} style={{ textDecoration: "none" }}>
          <img
            src={
              friend.profilePicture
                ? friend.profilePicture
                : baseUrl + "/images/Person/10.png"
            }
            alt=""
            className="object-cover w-16 h-16 rounded-full"
          />
        </Link>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start ml-4">
            <span className="text-base font-semibold">{friend.username}</span>
            <span className="text-sm font-normal">{friend.desc}</span>
          </div>
          <button
            className="md:mt-8 mb-2.5 border-none bg-customPrimary text-white rounded-md px-2.5 py-1.5 flex items-center text-base cursor-pointer font-medium"
            onClick={handleClick}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Friends;
