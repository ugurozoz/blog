import React from "react";
import PostList from ".//PostList";
import PostListFilters from "./PostListFilters";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="content-container">
      <div className="page-header">Dashboard Page</div>
      <div className="create-post">
        <Link to="/create">Create Post</Link>
      </div>
      <PostListFilters />
      <PostList />
    </div>
  );
};

export default DashboardPage;
