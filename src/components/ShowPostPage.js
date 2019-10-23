import React from "react";
import { connect } from "react-redux";
import Post from "./Post";


 
export class ShowPostPage extends React.Component  {   
  constructor(props) {
    super(props)    
  }  
  
    render() {
    return (
      <div className="content-container">
        <Post post={this.props.post} />
      </div>
      )
    }
 
}



const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id == props.match.params.id)
});



export default connect(mapStateToProps)(ShowPostPage);
