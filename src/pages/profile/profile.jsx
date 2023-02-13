import Feed from "../../components/feed/feed";
import Leftbar from "../../components/leftbar/leftbar";
import Rightbar from "../../components/rightbar/rightbar";
import TopBar from "../../components/topbar/topbar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profileContainer">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImage"
                src="assets/posts/4.jpg"
                alt=""
              />
              <img
                className="profileUserImage"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Diamond King</h4>
              <span className="profileInfoDesc">Hello World</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
