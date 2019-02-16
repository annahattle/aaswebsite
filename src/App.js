import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          The third recorded iteration of AAPI (Asian American Pacific Islander) Working Group, we are a student-led advocacy group established in 2016.  We advocate for the needs of Asian American and Pacific Islander students at UNC Chapel Hill and are focused on the following goals: <br/>

GOAL #1: SPACE: An Asian American student center that houses AAPI student organizations and their offices, provides social and academic mentorship in the form of libraries, scholarship information, etc and provides a collaborative space for student organizations to create programming and resources catered to UNC’s Asian American students.

GOAL #2 STAFF:  A staff member experienced in working with AAPI students at the Asian American student center to manage leadership development, resources, and programming specifically for AAPI students.

GOAL #3: ACADEMIC RESOURCES: A hire for an AAPI historian to teach Asian American Studies courses through the Department of American Studies. An Asian American Studies Program  housed under the American Studies Department that will offer classes across the disciplines of humanities, arts, and social sciences, and a Minor in Asian American Studies.
Curriculum in Asian American Studies, Asian American students want to learn about Asian American history, Asian American historian.
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
