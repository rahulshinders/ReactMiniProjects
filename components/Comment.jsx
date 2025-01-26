import React, { useState } from "react";

const initialComments = [
  { id: 1, text: "This is the first comment", replies: [] },
  { id: 2, text: "This is the second comment", replies: [] },
];

const Comment = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [reply, setReply] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  // Add a new comment
  const addComment = () => {
    setComments([
      ...comments,
      { id: Date.now(), text: newComment, replies: [] },
    ]);
    setNewComment("");
  };

  // Add a reply to a specific comment
  const addReply = (commentId) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, { id: Date.now(), text: reply }],
          };
        }
        return comment;
      })
    );
    setReply("");
    setReplyingTo(null);
  };

  return (
    <div>
      <h3>Comment Section</h3>
      {/* Add a new comment */}
      <input
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Post Comment</button>

      {/* Render comments */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>

            {/* Reply to comment */}
            <button onClick={() => setReplyingTo(comment.id)}>Reply</button>

            {/* Show replies */}
            {comment.replies.length > 0 && (
              <ul>
                {comment.replies.map((reply) => (
                  <li key={reply.id}>
                    <p>{reply.text}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Render reply input if replying to this comment */}
            {replyingTo === comment.id && (
              <div>
                <input
                  type="text"
                  placeholder="Write a reply..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <button onClick={() => addReply(comment.id)}>Post Reply</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
