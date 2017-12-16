import React, { Component } from 'react';
import logo from './logos/logo3.svg';
import './App.css';
import Post from './components/Post';
import apiCalls from './apiCalls';


class App extends Component {
  state = {posts: []}
  
  componentDidMount(){
    apiCalls.getPosts().then((posts) => {
      console.log('posts:', posts);
      this.setState({posts: posts});
    });
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
          {this.state.posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
      </div>
    );
  }
}

export default App;
