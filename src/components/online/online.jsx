import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="onlineFriendListItem">
      <div className="rightbarFriendProfilePictureContainer">
        <img
          src={user.profilePicture}
          alt="avi"
          className="rightbarFriendProfilePicture"
        />
        <span className="rightbarFriendOnline"></span>
      </div>
      <span className="onlineFriendUserName">{user.username}</span>
    </li>
  );
};

export default Online;
