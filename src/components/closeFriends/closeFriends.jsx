import './closeFriends.css'

const CloseFriends = ({ user }) => {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <li className="leftbarFriendListItem">
      <img
        src={baseUrl + `/images/${user.profilePicture}`}
        alt=""
        className="leftbarFriendProfilePicture"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriends
