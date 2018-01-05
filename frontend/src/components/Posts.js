import React from 'react';
import Post from './Post';
import ReactLoading from 'react-loading';


export default (props) => (
  <div>
    {
      // FETCH_POSTS has response status (postsFetched and postsError)
      props.postsFetched && 
        props.posts.map((post) => <Post key={post.id} post={post}/>)
    }
    {
      // FETCH_POSTS_BY_CATEGORY has not response status so check the array length 
      props.postsByCategory.length !== 0 && 
        props.postsByCategory.map((post) => <Post key={post.id} post={post}/>)
    }
    
    {/* Loadings and errors mesages */}  
    {
      !props.postsFetched && !props.postsError && props.postsByCategory.length === 0 &&
        <div>
          <ReactLoading type="bars" color="#4aa2f2" />
          <span> Loading...</span>
        </div>
    }
    {
      props.postsError &&
        <div>
          <span> Connection error</span>
        </div>
    }
  </div>
);
