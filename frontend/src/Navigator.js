import React from 'react';
import { connect } from 'react-redux';
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
          {this.props.post.map((post) => <Post key={post.id} post={post}/>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post  : state.post
  };
}

export default connect(mapStateToProps)(Navigator);
