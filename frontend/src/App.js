import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Navigator from './Navigator';
import store from './configureStore';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}

export default App;
