// PostList.jsx
import React from "react";
import Post from "./Post";

function PostList({ posts, onPostClick, onPostDelete, onPostUpdate }) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onClick={onPostClick}
          onDelete={onPostDelete}
          onUpdate={onPostUpdate}
        />
      ))}
    </div>
  );
}

export default PostList;
