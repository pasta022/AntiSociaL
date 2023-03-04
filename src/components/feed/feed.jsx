import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import { useEffect, useState } from "react";
import axios from "axios"

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/63efddc5e66fb90a8fa693d8");
      setPosts(res.data);
    }

    fetchPosts();

  },[])

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
