import React, { Component } from 'react';
import logo from './photos/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-logo-header">Spect.io</p>
        </header>
      </div>
    );
  }
}

export default App;
