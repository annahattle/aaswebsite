import React, { Component } from 'react';
import logo from './sun.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          The third recorded iteration of AAPI (Asian American Pacific Islander) Working Group, we are a student-led advocacy group established in 2016.  We advocate for the needs of Asian American and Pacific Islander students at UNC Chapel Hill and are focused on the following goals:

            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
