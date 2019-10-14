import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ id, title, body, createdAt }) => (
  <Link className="post-item" to={`edit/${id}`}>
    <div className="post">
      <strong>{title}</strong>
    </div>
  </Link>
);

export default PostItem;
