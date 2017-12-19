import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, CreatePost } from './containers';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Home/>
          )}/>
          <Route exact path="/createPost" render={() => (
            <CreatePost/>
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
