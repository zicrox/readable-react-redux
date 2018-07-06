import React from 'react';
import { connect } from 'react-redux';
import { HeaderMain, Post } from '../components';
import { postActions } from '../entities/post';


class PostDetail extends React.Component {
  state = {
    headerPostsTitle: "Post detail"
  }
  
  componentDidMount(){
    this.props.categories.length === 0 &&
      this.props.dispatch(postActions.fetchCategories());
    this.props.dispatch(postActions.fetchPostById(this.props.match.params.id));
  }
  
  render() {
    return (
      <div className="App">
        <HeaderMain categories={this.props.categories}/>
        <h2 className="posts-detail-header" align="center">{this.state.headerPostsTitle}</h2>
        
        {this.props.postDetailFetched && 
          <Post post={this.props.postDetail}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.post.categories,
    postDetail: state.post.postDetail,
    postDetailFetched: state.post.postDetailFetched,
  };
}

export default connect(mapStateToProps)(PostDetail);
