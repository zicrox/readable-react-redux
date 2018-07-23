import React from 'react';
import { Link } from 'react-router-dom'
import Ionicon from 'react-ionicons'


const Header = (props) => (
  <React.Fragment>
    <header className="posts-header">
      <Ionicon icon="ios-stats" fontSize="45px" color="#4aa2f2" onClick={() => props.onDropdownSortMethods()}/>
      <div>
        <h2>{props.title}</h2>
        {props.titleSortMethod && <span>Fliter by: {props.titleSortMethod}</span>}
      </div>
      <Link to="/createPost">
        <Ionicon icon="ios-create" fontSize="45px" color="#4aa2f2"/>
      </Link>
    </header>
    {props.showDropdownFilters && <DropdownSortMethods filters={props.filters} onSetTitleSortMethod={props.onSetTitleSortMethod} />}
  </React.Fragment>
);

const DropdownSortMethods = (props) => (
  <nav className="App-categories">
    <h3>Sort by</h3>
    <ul>
      {props.filters.map((filter) => (
        <li key={filter.path}>
          <span onClick={() => props.onSetTitleSortMethod(filter.name)}>
            {filter.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
);

class HeaderPosts extends React.Component {
  state = {
    showDropdownFilters: false,
    titleSortMethod: false
  }
  filters = [
    {name: "Vote score", path: "voteScore"},
    {name: "Date", path: "date"}
  ]
  dropdownSortMethods = () => {
    this.setState((prevState) => ({
      showDropdownFilters: !prevState.showDropdownFilters
    }));
  }
  setTitleSortMethod = (titleSortMethod) => {
    console.log(titleSortMethod);
    this.setState(() => ({
      titleSortMethod: titleSortMethod
    }));
  }
  render(){
    return (
      <Header 
        onDropdownSortMethods={this.dropdownSortMethods}
        onSetTitleSortMethod={this.setTitleSortMethod}
        showDropdownFilters={this.state.showDropdownFilters}
        filters={this.filters}
        title={this.props.title}
        titleSortMethod={this.state.titleSortMethod}
      />
    )
  }
}

export default HeaderPosts;
