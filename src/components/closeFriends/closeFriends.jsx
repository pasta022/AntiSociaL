import './closeFriends.css'

const CloseFriends = ({user}) => {
  return (
    <li className="leftbarFriendListItem">
      <img
        src={user.profilePicture}
        alt="avi"
        className="leftbarFriendProfilePicture"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriends
