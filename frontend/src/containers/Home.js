import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { HeaderMain, HeaderPosts, Post } from '../components';
import { postActions } from '../entities/post';


class Home extends React.Component {
  state = {
    headerPostsTitle: "Latest posts"
  }
  
  componentDidMount(){
    // fetchPosts if path it´s empty
    if(this.props.history.location.pathname === '/'){
      this.props.dispatch(postActions.fetchPosts());
    }
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
    postsFetched  : state.post.postsFetched,
    postsError  : state.post.postsError,
    categories: state.post.categories
  };
}

export default connect(mapStateToProps)(Home);
