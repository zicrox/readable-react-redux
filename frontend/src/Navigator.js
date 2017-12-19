import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import Post from './components/Post';
import logo from './logos/logo3.svg';
import { postActions } from './entities/post';


class Navigator extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(postActions.fetchPosts())
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My discussion blog</h1>
        </header>
        <div className="App-posts">
          <h2 className="posts-title">Posts</h2>
          {this.props.postsFetched &&
           this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
          {!this.props.postsFetched && !this.props.postsError &&
            <div>
              <ReactLoading type="bars" color="#4aa2f2" />
              <span> Loading...</span>
            </div>}
          {this.props.postsError &&
            <div>
              <ReactLoading type="bars" color="#4aa2f2" />
              <span> Connection error</span>
            </div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts  : state.post.posts,
    postsFetched  : state.post.fetched,
    postsError  : state.post.error
  };
}

export default connect(mapStateToProps)(Navigator);
