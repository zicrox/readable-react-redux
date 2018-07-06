import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <header>
      <h3>
        <Link to={`posts/${props.post.id}`}>
          {props.post.title}
        </Link>
      </h3>
      <span className="post-metadata">
        By: {props.post.author}
      </span>
    </header>
    <p className="post-intro">
      {props.post.body.length < 250 ? 
      props.post.body : props.post.body.substring(0, 250)+"..."}
    </p>
    <span className="post-metadata">
      {(new Date(props.post.timestamp)).toISOString().slice(0,10).replace(/-/g,"/")+", "}
      <Link to={`/${props.post.category}/posts`}>
        {props.post.category}
      </Link>
    </span>
    <hr/>
  </div>
);
