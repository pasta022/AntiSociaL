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
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">City: </span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">Barcelona</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightBarInfoKey">Relationship: </span>
            <span className="rightBarInfoValue">Complicated</span>
          </div>
        </div>
        h4.userFriends
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
