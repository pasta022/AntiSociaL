// import "./feed.css";
import Share from "./share";
import Post from "./post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import Loader from "./Loader";

const Feed = ({ username, profile }) => {
  const [posts, setPosts] = useState([]);
  const [isPost, setIsPost] = useState(false);
  const { user } = useContext(AuthContext);

  // api endpoint
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // get posts
  useEffect(() => {
    const fetchPosts = async () => {
      setIsPost(false);
      const res = username
        ? await axios.get(baseUrl + "/api/posts/profile/" + username)
        : await axios.get(`${baseUrl}/api/posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      setTimeout(() => {
        setIsPost(true);
      }, 1500);
    };

    fetchPosts();
  }, [user._id, username, baseUrl]);

  return (
    <div className="md:flex-[6] flex-1">
      <div className="p-5">
        {(!username || username === user.username) && <Share />}
        {isPost ? (
          posts.map((p) => <Post key={p._id} post={p} profile />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Feed;
