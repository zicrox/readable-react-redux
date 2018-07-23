import React from 'react';
import { connect } from 'react-redux';
import { HeaderMain, HeaderPosts, Posts } from '../components';
import { postActions } from '../entities/post';


class Home extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(postActions.fetchPosts());  
    this.props.categories.length === 0 &&
      this.props.dispatch(postActions.fetchCategories());
  }
  
  render() {
    return (
      <div className="App">
        <HeaderMain categories={this.props.categories}/>
        <section className="App-posts">
          <HeaderPosts title="Latest posts"/>
          <Posts 
            posts={this.props.posts}
            postsFetched={this.props.postsFetched}
            postsError={this.props.postsError}
            sortMethod={"voteScoreDown"}
          />
            
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts  : state.post.posts,
    postsFetched  : state.post.postsFetched,
    postsError  : state.post.postsError,
    categories: state.post.categories,
  };
}

export default connect(mapStateToProps)(Home);
