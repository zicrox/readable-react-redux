import React from 'react';
import { Link } from 'react-router-dom'
import Ionicon from 'react-ionicons'


export default (props) => (
  <header className="posts-header">
    <Link to="/">
      <Ionicon icon="md-home" fontSize="45px" color="#4aa2f2"/>
    </Link>
    <h2>{props.title}</h2>
    <Link to="/createPost">
      <Ionicon icon="ios-create" fontSize="45px" color="#4aa2f2"/>
    </Link>
  </header>
);
