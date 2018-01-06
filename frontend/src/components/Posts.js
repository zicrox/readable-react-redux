import React from 'react';
import Post from './Post';
import ReactLoading from 'react-loading';


export default (props) => (
  <div>
    {console.log("props")}
    {console.log(props)}
    {
      // FETCH_POSTS has response status (postsFetched and postsError)
      props.postsFetched && 
        props.posts.map((post) => <Post key={post.id} post={post}/>)
    }
    {
      // FETCH_POSTS_BY_CATEGORY has not response status so check the array length 
      props.postsByCategory && props.postsByCategory.length !== 0 && 
        props.postsByCategory.map((post) => <Post key={post.id} post={post}/>)
    }
    
    {/* Loadings and errors mesages */}  
    {
      ((!props.postsByCategory && !props.postsFetched && !props.postsError) || 
      (!props.postsFetched && props.postsByCategory && props.postsByCategory.length === 0)) &&
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
