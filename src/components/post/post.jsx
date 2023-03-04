import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture || PF+"person/10.png"}
              alt=""
              className="postProfilePicture"
            />
            <span className="postUserName">{ user.username}</span>
            <span className="postTimeStamp">{format(post.createdAt) }</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF+post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={PF+"like.jpeg"} alt="" className="postLikeIcon" onClick={handleLike}/>
            <img src={PF+"love.jpg"} alt="" className="postLikeIcon" onClick={handleLike}/>
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
