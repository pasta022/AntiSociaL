import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
