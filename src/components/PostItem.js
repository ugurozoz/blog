import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostItem = ({ id, title, body, createdAt }) => (
  <Link className="post-item" to={`edit/${id}`}>
    <div className="post">
      <strong>{title}</strong>
      <span>{moment(createdAt).format("MMMM Do, YYYY")}</span>
    </div>
  </Link>
);

export default PostItem;
