import React from "react";
import moment from "moment";

export default class Post extends React.Component {   
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : "",
      body: props.post ? props.post.body : "",
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: ""
    };    
  }
  render() {
    
    return (
      <div>
        <div className="page-header">{this.state.title}</div>
        <div className="page-body">{this.state.body}</div>
      </div>
    )
  }
}