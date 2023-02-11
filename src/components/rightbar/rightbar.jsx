import { MoreVert } from "@mui/icons-material";
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
          <li className="onlineFriendListItem">
            <div className="rightbarFriendProfilePictureContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="avi"
                className="rightbarFriendProfilePicture"
              />
              <span className="rightbarFriendOnline"></span>
            </div>
            <span className="onlineFriendUserName">Joe Carter</span>
          </li>
          <li className="onlineFriendListItem">
            <div className="rightbarFriendProfilePictureContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="avi"
                className="rightbarFriendProfilePicture"
              />
              <span className="rightbarFriendOnline"></span>
            </div>
            <span className="onlineFriendUserName">Joe Carter</span>
          </li>
          <li className="onlineFriendListItem">
            <div className="rightbarFriendProfilePictureContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="avi"
                className="rightbarFriendProfilePicture"
              />
              <span className="rightbarFriendOnline"></span>
            </div>
            <span className="onlineFriendUserName">Joe Carter</span>
          </li>
          <li className="onlineFriendListItem">
            <div className="rightbarFriendProfilePictureContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="avi"
                className="rightbarFriendProfilePicture"
              />
              <span className="rightbarFriendOnline"></span>
            </div>
            <span className="onlineFriendUserName">Joe Carter</span>
          </li>
          <li className="onlineFriendListItem">
            <div className="rightbarFriendProfilePictureContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="avi"
                className="rightbarFriendProfilePicture"
              />
              <span className="rightbarFriendOnline"></span>
            </div>
            <span className="onlineFriendUserName">Joe Carter</span>
          </li>
          <li className="onlineFriendListItem">
            <div className="rightbarFriendProfilePictureContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="avi"
                className="rightbarFriendProfilePicture"
              />
              <span className="rightbarFriendOnline"></span>
            </div>
            <span className="onlineFriendUserName">Joe Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
