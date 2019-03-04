import React, { Component } from 'react';
import Header from './components/Header';
import wave from './photos/wave.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="info">A music visualizer for Spotify.</p>
        <p className="landingLogin">Sign up or Login to get started.</p>
        <img src={wave} id="wave" alt="landingWave" />
        <a href="#" className="greenButton">Get Started</a>
      </div>
    );
  }
}

export default App;
