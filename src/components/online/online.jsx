import "./online.css";

const Online = ({ user }) => {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <li className="onlineFriendListItem">
      <div className="rightbarFriendProfilePictureContainer">
        <img
          src={baseUrl + `/images/${user.profilePicture}`}
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
