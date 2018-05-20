import React from 'react';
import { connect } from 'react-redux';
import { HeaderMain, HeaderPosts, Posts } from '../components';
import { postActions } from '../entities/post';


class Category extends React.Component {
  state = {
    headerPostsTitle: "Latest posts"
  }
  
  componentDidMount(){
    // if not have categories: fetch
    if(this.props.categories.length === 0){
      this.props.dispatch(postActions.fetchCategories());  
    }else{
      this.conditionsPostsByCategory(this.props);
    }
  }
  
  componentWillReceiveProps(nextProps){
    this.conditionsPostsByCategory(nextProps);
  }
  
  conditionsPostsByCategory = (propsToCheck) => {
    // categories received && postsByCategory is empty
    if(propsToCheck.categories.length > 0){
      const pathSplited = propsToCheck.location.pathname.split('/');
      // path with categories
      if(pathSplited.length > 2){
        const categoryFromPath = pathSplited[1];
        // valid category in path
        if(propsToCheck.categories.find((cat)=>cat.path === categoryFromPath)){
          this.setState({ headerPostsTitle: categoryFromPath });
          // postsByCategory empty or posts of diferent category 
          if(propsToCheck.postsByCategory.length === 0 || categoryFromPath !== propsToCheck.postsByCategory[0].category){
            this.props.dispatch(postActions.fetchPostsByCategory(categoryFromPath));
          }
        }
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <HeaderMain categories={this.props.categories}/>
        <section className="App-posts">
          <HeaderPosts title={this.state.headerPostsTitle}/>
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
