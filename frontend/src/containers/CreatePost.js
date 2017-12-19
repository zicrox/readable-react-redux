import React from 'react';
import { connect } from 'react-redux';
import { postActions } from '../entities/post';
import { HeaderMain } from '../components';


class CreatePost extends React.Component {
  
  clickButton = (bookId) => {
    console.log("Try to addPost");
    const postData = {
      "id": "9xf0y6ziyjabvozdd253nd",
      "timestamp": 1467166872888,
    	"title": "React is good",
    	"body": "Yea everyone says so after all.",
    	"author": "thingtwo",
    	"category": "react",
    }
    this.props.dispatch(postActions.addPost(postData))
  }
  
  render() {
    return (
      <div className="create-post">
        <HeaderMain/>
        <div className="create-post-title">
          <span>Title</span>
          <input></input>
        </div>
        <div className="create-post-body">
          <span>Body</span>
          <textarea></textarea>
          <button onClick={this.clickButton}>Submit</button>
        </div>
      </div>
    );
  }
}

export default connect()(CreatePost);
