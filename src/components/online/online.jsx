import "./online.css";

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="onlineFriendListItem">
      <div className="rightbarFriendProfilePictureContainer">
        <img
          src={PF+user.profilePicture}
          alt=""
          className="rightbarFriendProfilePicture"
        />
        <span className="rightbarFriendOnline"></span>
      </div>
      <span className="onlineFriendUserName">{user.username}</span>
    </li>
  );
};

export default Online;
