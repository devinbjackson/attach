import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav/Nav';
import router from "./router";

import TestLogin from './components/TestLogin'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      {router}
        <TestLogin />
      </div>
    );
  }
}

export default App;
