import React from 'react';
import { Link } from 'react-router-dom'
import Ionicon from 'react-ionicons'


const Header = (props) => (
  <React.Fragment>
    <header className="posts-header">
      <Ionicon icon="ios-stats" fontSize="45px" color="#4aa2f2" onClick={props.onDropdownSortMethods}/>
      <div>
        <h2>{props.title}</h2>
        {props.titleSortMethod && <span>Fliter by: {props.titleSortMethod}</span>}
      </div>
      <Link to="/create-post">
        <Ionicon icon="ios-create" fontSize="45px" color="#4aa2f2"/>
      </Link>
    </header>
    {props.showDropdownSortMethos && <DropdownSortMethods sortMethods={props.sortMethods} onSetTitleSortMethod={props.onSetTitleSortMethod} />}
  </React.Fragment>
);

const DropdownSortMethods = (props) => (
  <nav className="App-categories">
    <h3>Sort by</h3>
    <ul>
      {props.sortMethods.map((sortMethod) => (
        <li key={sortMethod.key}>
          <span onClick={() => props.onSetTitleSortMethod(sortMethod)}>
            {sortMethod.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
);

class HeaderPosts extends React.Component {
  state = {
    showDropdownSortMethos: false,
  }
  sortMethods = [
    {name: "Vote score", key: "voteScoreUp"},
    {name: "Date", key: "dateUp"}
  ]
  dropdownSortMethods = () => {
    this.setState((prevState) => ({
      showDropdownSortMethos: !prevState.showDropdownSortMethos
    }));
  }
  setTitleSortMethod = (sortMethod) => {
    this.props.onChangeSortMethod(sortMethod);
  }
  render(){
    return (
      <Header 
        onDropdownSortMethods={this.dropdownSortMethods}
        onSetTitleSortMethod={this.setTitleSortMethod}
        showDropdownSortMethos={this.state.showDropdownSortMethos}
        sortMethods={this.sortMethods}
        title={this.props.title}
        titleSortMethod={this.props.sortMethod.name}
      />
    )
  }
}

export default HeaderPosts;
