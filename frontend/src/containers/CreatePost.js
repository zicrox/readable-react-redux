import React from 'react';
import { HeaderMain } from '../components';


export default class CreatePost extends React.Component {
  
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
          <button>Submit</button>
        </div>
      </div>
    );
  }
}