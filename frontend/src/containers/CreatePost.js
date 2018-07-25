import React from 'react';
import { connect } from 'react-redux';
import { postActions } from '../entities/post';
import { HeaderMain } from '../components';


class CreatePost extends React.Component {
  state = {
    title    : "",
    author   : "",
    body     : "",
    category : ""
  };
  
  componentDidMount(){
    this.props.categories.length === 0 &&
      this.props.dispatch(postActions.fetchCategories());
    this.props.match.params.id &&
      this.props.dispatch(postActions.fetchPostById(this.props.match.params.id));
  }
  
  // componentWillReceiveProps(nextProps){
  //   if(this.props.match.params.id && Object.keys(nextProps.postDetail).length === 0) {
  //     this.setState({title: this.props.postDetail.title})
  //   }
  // }
  
  componentDidUpdate(prevProps, prevState, snapshot){
    // Update state from props (postDetail)
    if(this.props.match.params.id && Object.keys(this.props.postDetail).length !== 0 && Object.keys(prevProps.postDetail).length === 0) {
      console.log(this.props.postDetail.category);
      console.log(this.props.categories);
      this.setState({
        title    : this.props.postDetail.title,
        body     : this.props.postDetail.body,
      	author   : this.props.postDetail.author,
      	category : this.props.postDetail.category,
      });
    }
  }
  
  submit = (bookId) => {
    const genId = () => (
      Math.random().toString(36).substr(2, 9) + 
      Math.random().toString(36).substr(2, 9)
    )
    const postData = {
      "id"        : genId(),
      "timestamp" : Date.now(),
    	"title"     : this.state.title,
    	"body"      : this.state.body,
    	"author"    : this.state.author,
    	"category"  : this.state.category,
    }
    this.props.dispatch(postActions.addPost(postData));
    this.props.history.push('/');
  }
  
  renderSelect = () => (
    <select defaultValue={this.props.postDetail.category} onChange={(event) => this.setState({category: event.target.value})}>
      {this.props.categories.map((category) => (
        <option key={category.path} value={category.path}>{category.name}</option>
      ))}
    </select>
  );
  
  // TODO optimize move setState functions out of render
  render() {
    return (
      <div className="create-post">
        <HeaderMain categories={this.props.categories}/>
        <h2 className="create-post-title">Create post</h2>
        <div className="create-post-input">
          <span>Title</span>
          <input
            type="text"
            placeholder="Post title"
            value={this.state.title}
            onChange={(event) => this.setState({title: event.target.value})}
          />
        </div>
        <div className="create-post-input">
          <span>Author</span>
          <input
            type="text"
            placeholder="Post author"
            value={this.state.author}
            onChange={(event) => this.setState({author: event.target.value})}
          />
        </div>
        <div className="create-post-input">
          <span>Category</span>
          {
            this.props.match.params.id ? (
              // Render the "select" when "this.props.postDetail" has data to know the
              // "postDetail.category" to set the selector's "defaultValue"
              Object.keys(this.props.postDetail).length !== 0 && this.renderSelect()
            ) : (
              this.renderSelect()
            )
          }
        </div>
        <div className="create-post-body">
          <span>Body</span>
          <textarea 
            type="text"
            placeholder="Post body"
            value={this.state.body}
            onChange={(event) => this.setState({body: event.target.value})}>
          </textarea>
          <button onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories : state.post.categories,
    postDetail : state.post.postDetail,
  };
}

export default connect(mapStateToProps)(CreatePost);
