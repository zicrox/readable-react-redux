import React from 'react';
import Post from './Post';
import ReactLoading from 'react-loading';


export default (props) => (
  <div>
    {props.postsFetched &&
      props.posts.map((post) => <Post key={post.id} post={post}/>)}
  
  {!props.postsFetched && !props.postsError &&
    <div>
      <ReactLoading type="bars" color="#4aa2f2" />
      <span> Loading...</span>
    </div>}
    
  {props.postsError &&
    <div>
      <span> Connection error</span>
    </div>}
    
  </div>
);
