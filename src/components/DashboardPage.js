import React from "react";
import PostList from ".//PostList";
import PostListFilters from "./PostListFilters";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <div>Dashboard Page</div>
      <div>
        <Link to="/create">Create Post</Link>
      </div>
      <PostListFilters />
      <PostList />
    </div>
  );
};

export default DashboardPage;
