import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/online";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
};

export default Rightbar;
