import React, { Component } from 'react';
import logo from './sun.png';
import wglogo from './wglogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={wglogo} className="App-mainlogo"/>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <a
            className="App-link"
            href="https://www.facebook.com/unc.aapiwg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </header>

        <body>
          <p class=" text header-text">What is AAPI Working Group?</p>
          <p class=" text topic-text">
            The third recorded iteration of AAPI (Asian American/Pacific Islander)
            Working Group, we are a student-led advocacy group established in 2016.
            We advocate for the needs of AAPI students
            at UNC Chapel Hill and are focused on the following goals:
          </p>

        <section>
          <article>
            <p class="text body-text">
              GOAL #1: SPACE: An Asian American student center that houses AAPI
              student organizations and their offices and
              provides a collaborative space for student organizations to create
              programming and resources catered to UNC’s Asian American students.
            </p>
          </article>

          <article>
            <p class="text body-text">
              GOAL #2 STAFF:  A staff member experienced in working with AAPI
              students at the Asian American student center to manage leadership
              development, resources, and programming specifically for AAPI students.
            </p>
            </article>

        <article>
        <p class="text body-text">
        GOAL #3: ACADEMIC RESOURCES: An Asian American Studies curriculum that
        offers students more courses in Asian American history, etc. as well as
        a cluster hire of Asian American professors.
        </p>
        </article>
        </section>


        </body>
      </div>
    );
  }
}

export default App;
