import React from 'react';
import { connect } from 'react-redux';
import { HeaderMain, HeaderPosts, Posts } from '../components';
import { postActions } from '../entities/post';


class Category extends React.Component {
  state = {
    headerPostsTitle: "Latest posts"
  }
  
  componentDidMount(){
    // TODO temporal: avoid dispatch fetchCategories
    // this.props.categories.length === 0 &&
      this.props.dispatch(postActions.fetchCategories());
  }
  
  componentWillReceiveProps(nextProps){
    // categories received && postsByCategory is empty
    if(nextProps.categories.length > 0){
      const pathSplited = this.props.history.location.pathname.split('/');
      // path with categories
      if(pathSplited.length > 2){
        const categoryFromPath = pathSplited[1];
        // valid category in path
        if(nextProps.categories.find((cat)=>cat.path === categoryFromPath)){
          this.setState({ headerPostsTitle: categoryFromPath });
          // postsByCategory empty or posts of diferent category 
          if(nextProps.postsByCategory.length === 0 || categoryFromPath !== nextProps.postsByCategory[0].category){
            this.props.dispatch(postActions.fetchPostsByCategory(categoryFromPath));
          }
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
            
          <Posts 
            postsByCategory={this.props.postsByCategory}
          />
            
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.post.categories,
    postsByCategory: state.post.postsByCategory
  };
}

export default connect(mapStateToProps)(Category);
