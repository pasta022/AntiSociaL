import { Add, MoreVert, People, Remove } from "@mui/icons-material";
import { Users } from "../dummyData";
import Online from "./online/online";
// import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Rightbar = ({ profile, user }) => {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?._id)
  );

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // check if user follows profile
  useEffect(() => {
    setFollowed(currentUser.following.includes(user?._id));
    // console.log(currentUser.followers.length);
  }, [currentUser, user]);

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

  // follow user
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

  const HomeRightBar = () => {
    return (
      <div className="hidden md:block">
        <div className="flex items-center">
          <img
            src={baseUrl + "/images/birthday.jpg"}
            alt=""
            className="mr-2.5 w-11 h-11"
          />
          <span className="text-base font-light">
            <b>Mr Moose</b> and <b>3 others</b> have their birthday today{" "}
          </span>
        </div>
        <div className="my-7">
          <div className="flex items-center justify-center mb-1.5">
            <span className="text-base font-thin text-center">
              Sponsored Ad
            </span>
            <MoreVert className="cursor-pointer" />
          </div>
          <img
            src={baseUrl + "/images/ad.jpg"}
            alt=""
            className="w-full cursor-pointer rounded-[10px]"
          />
        </div>
        <h4 className="mb-2.5">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <div className="flex justify-end w-full md:block">
            <button
              className="md:mt-8 mb-2.5 border-none bg-customPrimary text-white rounded-md px-2.5 py-1.5 flex items-center text-base cursor-pointer font-medium"
              onClick={handleClick}
            >
              {followed ? "Unfollow" : "Follow"}
              {followed ? <Remove /> : <Add />}
            </button>
          </div>
        )}
        <h4 className="hidden md:block text-lg font-medium mb-2.5">
          User Information
        </h4>
        <div className="grid grid-cols-2 mt-2 mb-1 md:block">
          <div className="col-span-1 mb-5">
            <span className="font-medium text-[#555] mr-2.5">City: </span>
            <span className="font-light">{user.city}</span>
          </div>
          <div className="col-span-1 mb-5">
            <span className="font-medium text-[#555] mr-2.5">From: </span>
            <span className="font-light">{user.from}</span>
          </div>
          <div className="col-span-2 mb-5">
            <span className="font-medium text-[#555] mr-2.5">
              Relationship:{" "}
            </span>
            <span className="font-light">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                  ? "Married"
                  : "Complicated"}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <Link
            to={`/followers/${user._id}`}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className="flex items-center">
              <People className="text-customPrimary" />
              <span className="ml-2">
                {user?.followers?.length} followers
              </span>
            </div>
          </Link>
          <Link
            to={`/following/${user._id}`}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className="flex items-center ml-4">
              <People className="text-customPrimary" />
              <span className="ml-2">
                {user?.following?.length} following
              </span>
            </div>
          </Link>
        </div>
        {/* <h4 className="userFriends">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={`/profile/${friend.username}`}
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/10.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div> */}
      </>
    );
  };

  return (
    <div className="flex-[3.5]">
      <div className="p-5 pb-0 md:pl-0 md:pr-5 md:pb-0">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
