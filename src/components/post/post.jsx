import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import { Users } from "../../dummyData";
import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={PF+Users.filter(u => u.id === post.id)[0].profilePicture}
              alt=""
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
          <img src={PF+post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.jpeg" alt="" className="postLikeIcon" onClick={handleLike}/>
            <img src="/assets/love.jpg" alt="" className="postLikeIcon" onClick={handleLike}/>
            <span className="postLikeCounter">
              {like} people liked it
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
