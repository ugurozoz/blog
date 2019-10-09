import React from "react";
import { connect } from "react-redux";
import { startCreatePost } from "../actions/posts";
import PostForm from "./PostForm";

export class CreatePostPage extends React.Component {
  onSubmit = post => {
    this.props.startCreatePost(post);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div>Create Post</div>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startCreatePost: post => dispatch(startCreatePost(post))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CreatePostPage);
