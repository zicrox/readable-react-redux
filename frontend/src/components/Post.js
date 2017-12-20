import React from 'react';

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
      {(new Date(props.post.timestamp)).toISOString().slice(0,10).replace(/-/g,"/")}
    </span>
    <hr/>
  </div>
);
