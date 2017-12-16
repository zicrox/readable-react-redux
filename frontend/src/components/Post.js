import React from 'react';

export default (props) => (
  <div>
    <header>
      <h3><a href="https://doncoco.es/">{props.post.title}</a></h3>
      <span className="post-author">{props.post.author}</span>
    </header>
    <p className="post-intro">{props.post.body}</p>
  </div>
);
