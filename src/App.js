import React, { Component } from 'react';
import logo from './sun.png';
import wglogo from './wglogo.png';
import dm_graph from './unc_demographics.png';
import nc_bar from './nc_bar.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={wglogo} className="App-mainlogo"/>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <section>
          <article><a href="https://www.facebook.com/unc.aapiwg/" class="fa fa-facebook"></a></article>
          <article><a href="https://www.facebook.com/unc.aapiwg/" class="fa fa-twitter"></a></article>
          </section>
          {/*}<a
            className="App-link"
            href="https://www.facebook.com/unc.aapiwg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>*/}
        </header>

    <body>




  <p class=" text header-text highlight-yellow">Who we are.</p>
  <p class=" text topic-text">
    The third recorded iteration of AAPI (Asian American/Pacific Islander)
    Working Group, we are a student-led advocacy group established in 2016.
    We advocate for the needs of AAPI students
    at UNC Chapel Hill and are focused on the following goals:
  </p>

  <section>
    <article>
      <p class="text sub-topic-text">SPACE</p>
      <p class="text body-text">
        An Asian American <b>student center</b> that houses AAPI
        student organizations and their offices,
        provides social and academic mentorship in the form of libraries, scholarship information, and
        provides a collaborative space for student organizations to create
        programming and resources catered to UNC’s Asian American students.
      </p>
    </article>



    <article>
      <p class="text sub-topic-text">STUDIES</p>
      <p class="text body-text">
        A formalized <b>Asian American Studies (AAS) curriculum</b> that
        offers students more courses across the
        disciplines of humanities, arts, and social sciences. A hire for a <b>historian</b>
        who specializes in Asian American history.
      </p>
    </article>
  </section>

  <p class="text sub-topic-text"> Our asks are not new. So, why now? Why not 5 years from now?
    Because timing matters. Now, more than ever, the campus climate is changing.
    Students have organized and enacted change on this campus.
    There is a momentum, and we can not let this opportunity to pass when the
    administration is paying attention to us and what we want.

    <p class="text header-text highlight-red">Brief description of AAS. </p>
    <p class="text topic-text">There is a difference between Asian Studies and Asian American Studies (AAS). </p>
    <p class="text body-text">Unlike <b>Asian Studies</b>, which focuses on the history,
    politics, culture, and experiences of Asian people living in Asia, <b>Asian American Studies</b> is
    interested in the history, politics, culture, experiences, of Asians
      living in the United States. Below shows a cross course comparison between the two departments: </p>
      <p class="edit-text sub-topic-text">[insert chart]</p>

    <p class="text body-text">Asian American Studies emerged out of the Civil Rights Movement in the 1960s and 1970s.
    During the Third World Liberation Front, students of Color at San Francisco University demanded
    their college curriculum reflect the diverse histories of ethnic populations in the US that have existed for hundreds
    of years. An incredible demonstration of coalition building, the rise of Ethnic Studies, including AAS,
    was a powerful example of reaching across communities to recognize shared experiences of oppression and political challenges.  </p>

    <p class="text header-text highlight-blue">Why AAS at UNC.</p>
    <p class="text topic-text">Asian American Studies is a valuable intellectual field, enrichening for both AAPI and non-AAPI students.</p>
    <p class="text body-text"><i>What is the significance of a growing Asian
        American student population at UNC, growing AsAm population in N.C and nationwide, and the implications on policy, economy, education, social transformation? What histories have been hidden or forgotten, and how can students and UNC as an
        institution move forward in recognizing and listening to marginalized voices? How does a growing N.C. AsAm population complicate the traditional notion of a Black & White South?</i> </p>

        <p class="text body-text">Everyone benefits from learning being racially literate in a society being transformed by forces like immigration and race-based policies. </p>
    <p class="text sub-topic-text">A growing AAPI population in North Carolina.</p>
    <p class="text body-text">UNC is a <b>public institution</b>. North Carolina’s Asian population is the fastest-growing racial/ethnic group in the state. The state’s Asian population grew from 227,046 residents in 2010 to 325,289 in 2017, an increase of nearly 50%. The state’s
      total population grew by 7.7% over this period.</p>
    <p class="text body-text">Between 2000 and 2010, North Carolina’s Asian-American population grew by 85%— the fastest rate among Southern states and the 3rd fastest in the country:</p>
    <img src={nc_bar} className="nc_bar" />
    <p class="edit-text sub-topic-text">[insert information about letter writing campaign, pull quotes?]</p>


    <p class="text header-text">What UNC offers for AAS.</p>
    <p class="text topic-text">The University currently offers no certificate, minor, or major in Asian American Studies. </p>
    <p class="edit-text sub-topic-text">[insert data viz about courses + freq, enrollment, capacity - hover for info]</p>
    <p class="edit-text sub-topic-text">[insert faculty information]</p>

    <p class="text header-text">Why this is not enough.</p>
    <p class="text topic-text">13/15 of our peer institutions offer a formalized program of study in Asian American Studies,
      with a major and/or minor. </p>
    <p class="edit-text sub-topic-text">[insert chart comparison with peer institutions]</p>
    <p class="text body-text">UNC is lagging behind its peer institutions in preparing its students to understand the significance of the Asian American population increase both in North Carolina and nationwide. They are
      failing to provide the adequate curriculum and student services to prepare its students for local and national changes in America’s political and social landscapes.</p>

    <p class="text header-text">Why an Asian American Student Center.</p>
    <p class="text topic-text">Sonja Haynes Stone Center. Carolina Latinx Center.
      Carolina Indian Circle. Where is the Asian American Student Center?</p>
    <p class="text body-text">There is an urgency and importance of adding an Asian
    American-focus to student services. Asian Americans are the largest and fastest-growing minority
    student population at UNC. In the past 8 years, our population has nearly doubled; in 2010,
    Asian Americans comprised 8.6% of the total undergraduate student population. In 2018, this number is 16%.
    yet we are the only group with no dedicated space:
    </p>
    <img src={dm_graph} className="demographics_line_plot" />
    <p class="edit-text sub-topic-text">[insert x organizations endorse this]</p>

  </p>


</body>
      </div>
    );
  }
}

export default App;
