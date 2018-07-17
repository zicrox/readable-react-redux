import React from 'react';
import { Link } from 'react-router-dom'
import Ionicon from 'react-ionicons'
import logo from '../logos/logo2.svg';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="App-header">
        <Ionicon icon="md-list" fontSize="45px" color="#1a5099" onClick={() => props.onDropdownCategories()}/>
        <Link to="/">
          <h1>My discussion blog</h1>
        </Link>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Ionicon className="App-logo" icon="md-home" fontSize="45px" color="#4aa2f2"/> */}
        </Link>
      </header>
      {props.showDropdownCategories && <DropdownCategories categories={props.categories} />}
    </React.Fragment>
  )
};

const DropdownCategories = (props) => (
  <nav className="App-categories">
    <ul>
      <li key="Home">
        <Link to="/">
          Home
        </Link>
      </li>
      {props.categories.map((category) => (
        <li key={category.path}>
          <Link to={`/${category.path}/posts`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

class HeaderMain extends React.Component {
  state = {
    showDropdownCategories: false
  }
  dropdownCategories = () => {
    this.setState((prevState) => ({
      showDropdownCategories: !prevState.showDropdownCategories
    }));
  }
  render(){
    return (
      <Header 
        onDropdownCategories={this.dropdownCategories}
        showDropdownCategories={this.state.showDropdownCategories}
        categories={this.props.categories}
      />
    )
  }
}

export default HeaderMain;
