import React, { Component } from 'react';
import logo from './logos/logo3.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My discussion blog</h1>
        </header>
        <div className="App-posts">
          <h2 className="posts-title">Posts</h2>
          <header>
            <h3 class="abstract-title" itemprop="headline"><a href="https://doncoco.es/">Lorem ipsum dolor</a></h3>
          </header>
          {/*  ahutor and date here */}
          <p className="post-intro">
            First post, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
