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
  }[props.sortMethod.key];
  
  // Render optimization: Avoid arrow functions and bind inside 
  const renderPost = (post) => <Post key={post.id} post={post}/>
  
  return (
    <React.Fragment>
      {
        // FETCH_POSTS has response status (postsFetched)
        props.postsFetched && 
          props.posts.sort(sortMethod).map(renderPost)
      }
      {
        // FETCH_POSTS_BY_CATEGORY has response status (postsByCategoryFetched)
        props.postsByCategoryFetched &&
          props.postsByCategory.sort(sortMethod).map(renderPost)
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