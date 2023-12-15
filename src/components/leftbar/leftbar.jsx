import "./leftbar.css";
import {
  Bookmark,
  CalendarToday,
  Chat,
  Groups,
  HelpOutline,
  PlayCircleFilled,
  RssFeed,
  School,
  Work,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriends from "../closeFriends/closeFriends";
import { useNavigate } from "react-router-dom";

const Leftbar = () => {
  const navigate = useNavigate();

  const directToLazyPage = () => {
    navigate("/nocontent");
  };
  return (
    <div className="hidden leftbarContainer md:block">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <RssFeed className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <Chat className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <PlayCircleFilled className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <Groups className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <Bookmark className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <HelpOutline className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <Work className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <CalendarToday className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li
            className="cursor-pointer leftbarListItem"
            onClick={directToLazyPage}
          >
            <School className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton" onClick={directToLazyPage}>
          Show More
        </button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
