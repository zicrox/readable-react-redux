import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Category, CreatePost } from './containers';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={({history}) => (
            <Home history={history}/>
          )}/>
          <Route exact path="/:category/posts" render={({history}) => (
            <Category history={history}/>
          )}/>
          <Route exact path="/createPost" render={({history}) => (
            <CreatePost history={history}/>
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
