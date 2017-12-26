import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <header>
      <h3><a href="">{props.post.title}</a></h3>
      <span className="post-metadata">
        By: {props.post.author}
      </span>
    </header>
    <p className="post-intro">{props.post.body}</p>
    <span className="post-metadata">
      {(new Date(props.post.timestamp)).toISOString().slice(0,10).replace(/-/g,"/")+", "}
      <Link to="/createPost">
        {props.post.category}
      </Link>
    </span>
    <hr/>
  </div>
);
