import React from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import selectPosts from "../selectors/posts";

export const PostList = props => (
  <div className="posts">
    {props.posts.map(post => (
      <PostItem key={post.id} {...post} />
    ))}
  </div>
);
//props.posts.map(post => {
//  return <div className="post{post.id}">{post.title}</div>;
//});

const mapStateToProps = state => {
  //console.log("state.posts", state.posts);
  return {
    posts:selectPosts(state.posts, state.filters)
  };
};
export default connect(mapStateToProps)(PostList);
