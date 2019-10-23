import React from "react";
import { connect } from "react-redux";
import { startEditPost, startRemovePost } from "../actions/posts";
import PostForm from "./PostForm";

export class EditPostPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = post => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push("/");
  };

  startRemovePost = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="content-container">
        <div className="page-header">Edit Post</div>
        <PostForm post={this.props.post} onSubmit={this.onSubmit} />
        <button onClick={this.startRemovePost} className="button button--remove">Remove Post</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id == props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: id => dispatch(startRemovePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostPage);
