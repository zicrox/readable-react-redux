import React from 'react';
import { connect } from 'react-redux';
import { HeaderMain, HeaderPosts, Posts } from '../components';
import { postActions } from '../entities/post';


class Home extends React.Component {
  state = {
    headerPostsTitle: "Latest posts"
  }
  
  componentDidMount(){
    // fetchPosts if path it´s empty
    this.props.history.location.pathname === '/' &&
      this.props.dispatch(postActions.fetchPosts());
      
    this.props.categories.length === 0 &&
      this.props.dispatch(postActions.fetchCategories());
    
    // Test action only call: fetchPostsByCategory
    // this.props.dispatch(postActions.fetchPostsByCategory('redux'));
    
  }
  
  componentWillReceiveProps(nextProps){
    // categories received
    if(nextProps.categories.length > 0){
      const pathSplited = this.props.history.location.pathname.split('/');
      // path with categories
      if(pathSplited.length > 2){
        const categoryFromPath = pathSplited[1];
        // valid category in path
        if(nextProps.categories.find((cat)=>cat.path === categoryFromPath)){
          this.setState({ headerPostsTitle: categoryFromPath });
          this.props.dispatch(postActions.fetchPostsByCategory(categoryFromPath));
        }
        // If not fetchPosts or error
        // change the error control to the fetchCategories action
        // TODO change error control general only if this matters
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <HeaderMain/>
        <section className="App-posts">
          <HeaderPosts title={this.state.headerPostsTitle}/>
          {/*  TODO categories header*/}
          {/* <Link to="/createPost">
            <span>react</span>
          </Link> */}
            
          <Posts posts={this.props.posts} postsFetched={this.props.postsFetched} postsError={this.props.postsError}/>
            
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
    categories: state.post.categories
  };
}

export default connect(mapStateToProps)(Home);
