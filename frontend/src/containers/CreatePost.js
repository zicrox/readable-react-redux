import React from 'react';
import { connect } from 'react-redux';
import { postActions } from '../entities/post';
import { HeaderMain } from '../components';


class CreatePost extends React.Component {
  state = {
    title: "",
    author: "",
    body: "",
    category: "react"
  };
  
  componentDidMount(){
    this.props.dispatch(postActions.fetchCategories());
  }
  
  onSubmit = (bookId) => {
    const genId = () => (
      Math.random().toString(36).substr(2, 9) + 
      Math.random().toString(36).substr(2, 9)
    )
    const postData = {
      "id": genId(),
      "timestamp": Date.now(),
    	"title": this.state.title,
    	"body": this.state.body,
    	"author": this.state.author,
    	"category": this.state.category,
    }
    this.props.dispatch(postActions.addPost(postData));
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div className="create-post">
        <HeaderMain/>
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
          <select value={this.state.category} onChange={(event) => this.setState({category: event.target.value})}>
            {this.props.categories.map((category) => (
              <option key={category.path} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="create-post-body">
          <span>Body</span>
          <textarea 
            type="text"
            placeholder="Post body"
            value={this.state.body}
            onChange={(event) => this.setState({body: event.target.value})}>
          </textarea>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.post.categories
  };
}

export default connect(mapStateToProps)(CreatePost);
