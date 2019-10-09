import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startEditPost } from "../actions/posts";
import PostForm from "./PostForm";

export class EditPostPage extends React.Component {
  onSubmit = post => {
    this.props.startEditPost(post);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div>Edit Post</div>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startEditPost: post => dispatch(startEditPost(post))
});

export default connect(
  undefined,
  mapDispatchToProps
)(EditPostPage);
