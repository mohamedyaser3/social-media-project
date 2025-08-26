import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostActions({ post, count, handleIncrement, postId }) {
  const navigate = useNavigate();
  return (
    <>
      {/* الإحصائيات */}
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{count} Likes</span>
        <span>{post.comments.length || 0} Comments</span>
      </div>

      {/* أزرار */}
      <div className="flex justify-around border-t border-gray-200 pt-2 text-gray-600 text-sm">
        <button onClick={handleIncrement} className="hover:text-blue-500">
          👍 Like
        </button>
        <button
          onClick={() => navigate("/post-details/" + postId)}
          className="hover:text-blue-500"
        >
          💬 Comment
        </button>
        <button className="hover:text-blue-500">↗ Share</button>
      </div>
    </>
  );
}
