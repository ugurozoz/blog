import React from "react";
import { connect } from "react-redux";

export const PostList = props => (
  <div>
    {props.posts.map(post => (
      <div className="post" key={post.id}>
        {post.title}
      </div>
    ))}
  </div>
);
//props.posts.map(post => {
//  return <div className="post{post.id}">{post.title}</div>;
//});

const mapStateToProps = state => {
  console.log("state.posts", state.posts);
  return {
    posts: [...state.posts]
  };
};
export default connect(mapStateToProps)(PostList);
