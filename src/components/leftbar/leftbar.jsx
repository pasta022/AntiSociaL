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

const Leftbar = () => {
  return (
    <div className="leftbarContainer">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilled className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Groups className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <Work className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <CalendarToday className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
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
