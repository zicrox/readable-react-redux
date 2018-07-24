import React from 'react';
import Post from './Post';
import ReactLoading from 'react-loading';

// Note: this components manage fetch status: fetched, loading, error
export default (props) => {
  
  const sortMethod = {
    voteScoreUp   : (a,b) => b.voteScore - a.voteScore,
    voteScoreDown : (a,b) => a.voteScore - b.voteScore,
    dateUp        : (a,b) => b.timestamp - a.timestamp,
    dateDown      : (a,b) => a.timestamp - b.timestamp
  }[props.sortMethod.key]
  
  return (
    <React.Fragment>
      {
        // FETCH_POSTS has response status (postsFetched)
        props.postsFetched && 
          props.posts.sort(sortMethod).map((post) => <Post key={post.id} post={post}/>)
      }
      {
        // FETCH_POSTS_BY_CATEGORY has response status (postsByCategoryFetched)
        props.postsByCategoryFetched &&
          props.postsByCategory.sort(sortMethod).map((post) => <Post key={post.id} post={post}/>)
      }
      
      {
        // Loading
        (!props.postsFetched && !props.postsByCategoryFetched && !props.postsError) &&
          <div>
            <ReactLoading type="bars" color="#4aa2f2" />
            <span> Loading...</span>
          </div>
      }
      {
        // Error message
        props.postsError &&
          <div>
            <span> Connection error</span>
          </div>
      }
    </React.Fragment>
  );
}