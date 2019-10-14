import React from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";

export const PostList = props => (
  <div>
    {props.posts.map(post => (
      <PostItem key={post.id} {...post} />
    ))}
  </div>
);
//props.posts.map(post => {
//  return <div className="post{post.id}">{post.title}</div>;
//});

const mapStateToProps = state => {
  console.log("state.posts", state.posts);
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(PostList);
