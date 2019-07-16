import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './App.css';
import ActionLink from './ActionLink';
import { Provider } from "react-redux";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h2>Parent Component</h2>
          <ActionLink myprops={'imported component'} />
        </div>
      </Provider>
    );
  }
}

export default App;

