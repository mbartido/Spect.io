import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="info">A music visualizer for Spotify.</p>
        <p className="landingLogin">Sign up or Login to get started.</p>
        <a href="#" className="greenButton">Get Started</a>
      </div>
    );
  }
}

export default App;
