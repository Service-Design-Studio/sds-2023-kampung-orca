// CommentList.jsx
import React from "react";
import Comment from "./Comment";

function CommentList({ comments, onCommentDelete }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={onCommentDelete}
        />
      ))}
    </div>
  );
}

export default CommentList;
