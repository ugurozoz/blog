import React from "react";
import PostList from "../components/PostList"
import PostListFilters from "../components/PostListFilters"

const DashboardPage = () => {
  return (
    <div>
      <div>Dashboard Page</div>
      <PostListFilters />
      <PostList />  
    </div>  
      
  )
  
};

export default DashboardPage;
