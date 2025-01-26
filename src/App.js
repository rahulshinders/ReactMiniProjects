import React, { useState } from "react";
import Todo from "../components/Todo";
import API from "../components/API";
import Register from "../components/Register";
import Login from "../components/Login";
import Search from "../components/Search";

// Sample comment data structure

const App = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);

  const addComment = () => {
    setComments([
      ...comments,
      { id: Date.now(), text: newComment, replies: [] },
    ]);
    setNewComment("");
  };

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
    setReplies(null);
  };

  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>add</button>

      <ul>
        {comments && comments.map((com) => <li key={com.id}>{com.text}</li>)}
      </ul>
    </div>
  );
};

export default App;
