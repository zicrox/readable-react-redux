import React from 'react';
import { Link } from 'react-router-dom'
import Ionicon from 'react-ionicons'

export default (props) => (
  <div>
    <header>
      <h3>
        <Link to={`/posts/${props.post.id}`}>
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
    <footer className="post-footer">
      <span className="post-metadata">
        {(new Date(props.post.timestamp)).toISOString().slice(0,10).replace(/-/g,"/")+", "}
        <Link to={`/${props.post.category}/posts`}>
          {props.post.category}
        </Link>
      </span>
      <span className="post-like">
        {props.post.voteScore}
        <Ionicon icon="md-thumbs-up" fontSize="25px" color="#1a5099"/>
      </span>
    </footer>
    <hr/>
  </div>
);
