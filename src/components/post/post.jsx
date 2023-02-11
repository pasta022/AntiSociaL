import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import "./post.css";

const Post = ({ post }) => {
  const user = Users.filter((u) => u.id === 1);
  console.log(user);
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter(u => u.id === post.id)[0].profilePicture}
              alt="avi"
              className="postProfilePicture"
            />
            <span className="postUserName">{ Users.filter(u => u.id === post.id)[0].username}</span>
            <span className="postTimeStamp">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.jpeg" alt="" className="postLikeIcon" />
            <img src="/assets/love.jpg" alt="" className="postLikeIcon" />
            <span className="postLikeCounter">
              {post.likes} people liked it
            </span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comments} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
