import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/online";
import "./rightbar.css";

const Rightbar = ({ profile, user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={PF+"birthday.jpg"} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mr Moose</b> and <b>3 others</b> have their birthday today{" "}
          </span>
        </div>
        <div className="adContainer">
          <div className="adTextContainer">
            <span className="adText">Sponsored Ad</span>
            <MoreVert className="adIcon" />
          </div>
          <img src={PF+"ad.jpg"} alt="" className="adImg" />
        </div>
        <h4 className="rightbarOnlineFriends">Online Friends</h4>
        <ul className="onlineFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single": user.relationship === 2 ? "Married" : "Complicated"}</span>
          </div>
        </div>
        <h4 className="userFriends">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={PF+"person/1.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/2.png"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/3.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/4.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/5.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/6.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
