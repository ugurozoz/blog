import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostItem = ({ id, title, body, createdAt }) => (
  <div className="post-item-container">
  <Link className="post-item" to={`post/${id}`}>
    <div className="post">
      <strong>{title}</strong>
      
      <span>{moment(createdAt).format("MMMM Do, YYYY")}</span>
      
    </div>
    </Link>
    <Link className="button button--edit" to={`edit/${id}`}>Edit</Link>
  </div>
    
    
);

export default PostItem;
