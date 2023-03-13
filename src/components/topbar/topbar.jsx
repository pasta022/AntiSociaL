import "./topbar.css";
import {
  SearchRounded,
  Person,
  Chat,
  Notifications,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const TopBar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbarLogo">AntiSociaL</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search..."
            className="topbarSearchInput"
          />
          <SearchRounded className="searchIcon" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "/person/10.png"
            }
            alt=""
            className="topbarProfilePicture"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
