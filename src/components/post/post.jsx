import { MoreVert } from "@mui/icons-material";
import "./post.css";

const Post = () => {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/10.png"
              alt="avi"
              className="postProfilePicture"
            />
            <span className="postUserName">Anonymoose</span>
            <span className="postTimeStamp">5M</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </span>
          <img src="/assets/posts/1.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.jpeg" alt="" className="postLikeIcon" />
            <img src="/assets/love.jpg" alt="" className="postLikeIcon" />
            <span className="postLikeCounter">60 people liked it</span>
          </div> 
          <div className="postBottomRight">
            <div className="postCommentText">12 Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
