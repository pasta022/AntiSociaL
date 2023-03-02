import './closeFriends.css'

const CloseFriends = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <li className="leftbarFriendListItem">
      <img
        src={PF+user.profilePicture}
        alt=""
        className="leftbarFriendProfilePicture"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriends
