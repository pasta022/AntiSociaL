import './feed.css'
import Share from '../share/share'
import Post from '../post/post'

const Feed = () => {
  return (
    <div className='feedContainer'>
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed
