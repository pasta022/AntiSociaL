import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/online";
import "./rightbar.css";

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/birthday.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mr Moose</b> and <b>3 others</b> have their birthday today{" "}
          </span>
        </div>
        <div className="adContainer">
          <div className="adTextContainer">
            <span className="adText">Sponsored Ad</span>
            <MoreVert className="adIcon" />
          </div>
          <img src="/assets/ad.jpg" alt="ad" className="adImg" />
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
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Barcelona</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Complicated</span>
          </div>
        </div>
        <h4 className="userFriends">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Johnny Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default Rightbar;
