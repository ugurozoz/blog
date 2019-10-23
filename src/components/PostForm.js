import React from "react";
import moment from "moment";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : "",
      body: props.post ? props.post.body : "",
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: ""
    };
  }

  onBodyChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.body) {
      this.setState(() => ({
        error: "Please provide title and body"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
            className="text-input"
          />
          <textarea
            placeholder="body"
            value={this.state.body}
            onChange={this.onBodyChange}
            className="textarea"
          ></textarea>
          <button className="button button--add">Add Blog</button>
        </form>
      </div>
    );
  }
}
