import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';
import Ionicon from 'react-ionicons'
import { HeaderMain, Post } from '../components';
import { postActions } from '../entities/post';


class Home extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(postActions.fetchPosts())
  }
  
  render() {
    return (
      <div className="App">
        <HeaderMain/>
        <section className="App-posts">
          <header className="posts-header">
            <Link to="/">
              <Ionicon icon="md-home" fontSize="45px" color="#4aa2f2"/>
            </Link>
            <h2>Posts</h2>
            <Link to="/createPost">
              <Ionicon icon="ios-create" fontSize="45px" color="#4aa2f2"/>
            </Link>
          </header>
          {this.props.postsFetched &&
           this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
          {!this.props.postsFetched && !this.props.postsError &&
            <div>
              <ReactLoading type="bars" color="#4aa2f2" />
              <span> Loading...</span>
            </div>}
          {this.props.postsError &&
            <div>
              <span> Connection error</span>
            </div>}
        </section>
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

export default connect(mapStateToProps)(Home);
