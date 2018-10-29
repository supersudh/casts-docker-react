import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const Comp1 = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit wat<code>src/App.js</code> and save to reload.
          </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      hey!
          </a>
  </header>
);

const Comp2 = () => (
  <p>yo!</p>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Comp1} />
          <Route path="/c2" component={Comp2} />
        </div>
      </Router>
    );
  }
}

export default App;
