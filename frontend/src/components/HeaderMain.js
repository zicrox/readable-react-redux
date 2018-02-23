import React from 'react';
import logo from '../logos/logo2.svg';
import { Link } from 'react-router-dom'


export default () => (
  <header className="App-header">
    <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
    <h1>My discussion blog</h1>
    <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
  </header>
);
