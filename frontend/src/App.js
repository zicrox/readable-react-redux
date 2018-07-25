import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Category, CreatePost, PostDetail } from './containers';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Home/>
          )}/>
          <Route exact path="/posts/:id" render={({match}) => (
            <PostDetail match={match}/>
          )}/>
          <Route exact path="/:category/posts" render={({location}) => (
            <Category location={location}/>
          )}/>
          <Route exact path="/create-post" render={({history, match}) => (
            <CreatePost history={history} match={match}/>
          )}/>
          <Route exact path="/edit-post/:id" render={({history, match}) => (
            <CreatePost history={history} match={match}/>
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

/*  
<Route> tip: !!The history object is mutable¡¡. Therefore it is recommended to access the location
from the render props of <Route>, not from history.location. This ensures your assumptions about
React are correct in lifecycle hooks. (e.g.: "componentWillReceiveProps" it will work correctly on path changes).

Docs Route: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md
*/