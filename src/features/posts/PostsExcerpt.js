import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';

const PostsExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId));

  return (
    <article>
        <h3>{post.title}</h3>
        <p className="excerpt">{post.body.substring(0, 50)}...</p>
        <p className="postCredit">
            <Link to={`post/${post.id}`}>View Post </Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt