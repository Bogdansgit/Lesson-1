
import "./PostList.style.scss";

function PostList({children}) {
  return (
    <ul className="postList">
      {children}
    </ul>
  )
}

export default PostList;