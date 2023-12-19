import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
// import "./post.css";
import { AuthContext } from "../context/authContext";

const Post = ({ post, profile }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  // api endpoints
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const profileEndpoint = "/profile";

  // set post likes
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [post.likes, currentUser._id]);

  // get user
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${baseUrl}/api/users?userId=${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId, baseUrl]);

  // allow user like/unlike a post
  const handleLike = () => {
    try {
      axios.put(`${baseUrl}/api/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full shadow-custom my-[30px] mx-0 rounded-[10px]">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={`${profileEndpoint}/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? baseUrl + `/images/${user.profilePicture}`
                    : baseUrl + "/images/Person/10.png"
                }
                alt=""
                className="object-cover w-8 h-8 rounded-full"
              />
            </Link>
            <span className="mx-4 my-0 text-base font-medium">
              {user.username}
            </span>
            <span className="text-xs font-light">{format(post.createdAt)}</span>
          </div>
          <div>
            <MoreVert />
          </div>
        </div>
        <div className="mx-0 my-5">
          <span>{post?.desc}</span>
          <img
            src={baseUrl + `/images/${post.img}`}
            alt=""
            className="w-full mt-5 object-cover max-h-[500px]"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={baseUrl + "/images/like.jpeg"}
              alt=""
              className="h-6 w-6 mr-1.5 cursor-pointer"
              onClick={handleLike}
            />
            <img
              src={baseUrl + "/images/love.jpg"}
              alt=""
              className="h-6 w-6 mr-1.5 cursor-pointer"
              onClick={handleLike}
            />
            <span className="text-[15px]">{like} people liked it</span>
          </div>
          <div>
            <div className="text-[15px] cursor-pointer border-dashed border-b border-gray-500">
              {post.comments.length} Comments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
