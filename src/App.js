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




  <p class=" text header-text">What is AAPI Working Group?</p>
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
        student organizations and
        provides a collaborative space for student organizations to create
        programming and resources catered to UNC’s Asian American students.
      </p>
    </article>

    <article>
      <p class="text sub-topic-text">STAFF</p>
      <p class="text body-text">
        A <b>staff member</b> experienced in working with AAPI
        students at the Asian American student center to manage leadership
        development, resources, and programming specifically for AAPI students.
      </p>
    </article>

    <article>
      <p class="text sub-topic-text">STUDIES</p>
      <p class="text body-text">
        A formalized <b>Asian American Studies curriculum</b> that
        offers students more courses will offer classes across the
        disciplines of humanities, arts, and social sciences, as well as an
        <b>Asian American historian</b>.
      </p>
    </article>
  </section>

  <p class="text sub-topic-text"> Our asks are not new. So, <span class="highlight-yellow">why now?</span> Why not 5 years from now?
    Because <span class="highlight-yellow">timing matters</span>. Now, more than ever, the campus climate is changing.
    Students have organized and enacted change on this campus.
    There is a momentum, and we can not let this opportunity to pass when the
    administration is paying attention to us and what we want.

    <p class="text header-text">What is Asian American Studies?</p>
<p class="text topic-text">There is a difference between Asian Studies and Asian American Studies. </p>
<p class="text body-text">Unlike "Asian" Studies which focuses on the history, politics, culture, religion, literary expression, of Asian people living in Asia,  Asian American Studies is interested in the history, culture, experiences, of Asians living in the United States.</p>
<p class="text body-text">Asian American Studies emerged out of the Civil Rights Movement and the growing interest of diverse ethnic populations here in the U.S. in their unique, but also shared, experiences and political challenges. Academic programs in Asian American Studies provide students with the opportunity to think about race beyond the black and white binary by addressing the following topics: </p>

    <p class="text header-text">Why Asian American Studies at UNC?</p>
    <p class="text topic-text">Asian American Studies is a valuable intellectual field, enrichening for both AAPI and non-AAPI students.</p>
    <p class="text body-text">Everyone benefits from learning being racially literate in a society being transformed by forces like immigration and race-based policies. We should all be able to answer: <i>What is the significance of a growing Asian American student population at UNC, growing AsAm population in N.C and nationwide, and the implications on policy, economy, education, social transformation? What histories have been hidden or forgotten, and how can students and UNC as an institution move forward in recognizing and listening to marginalized voices?  How does a growing N.C. AsAm population complicate the traditional notion of a Black & White South?</i> </p>
    <p class="text sub-topic-text">A growing AAPI population in North Carolina:</p>
    <p class="text body-text">North Carolina’s Asian population is the fastest-growing racial/ethnic group in the state. The state’s Asian population grew from 227,046 residents in 2010 to 325,289 in 2017, an increase of nearly 50%. The state’s total population grew by 7.7% over this period.</p>
    <p class="text body-text">Between 2000 and 2010, North Carolina’s Asian-American population grew by 85%— the fastest rate among Southern states and the 3rd fastest in the country:</p>
    <img src={nc_bar} className="nc_bar" />
    <p class="edit-text sub-topic-text">[insert information about letter writing campaign, pull quotes?]</p>


    <p class="text header-text">What is UNC offering for Asian American Studies?</p>
    <p class="text topic-text">The University currently offers no certificate, minor, or major in Asian American Studies. </p>
    <p class="edit-text sub-topic-text">[insert data viz about courses + freq, enrollment, capacity - hover for info]</p>
    <p class="edit-text sub-topic-text">[insert faculty information]</p>

    <p class="text header-text">Why is this not enough?</p>
    <p class="text topic-text">13/15 of our peer institutions offer a formalized program of study in Asian American Studies,
    with a major and/or minor. </p>
    <p class="edit-text sub-topic-text">[insert chart comparison with peer institutions]</p>
    <p class="text body-text">UNC, as a public institution, is lagging behind its peer institutions in preparing its students to understand the significance of the Asian American population increase both in North Carolina and nationwide. They are failing to provide the adequate curriculum and student services to prepare its students for local and national changes in America’s political and social landscapes.</p>

    <p class="text header-text">Why an Asian American Student Center?</p>
    <p class="text topic-text">Sonja Haynes Stone Center. Carolina Latinx Collaborative.
    Carolina Indian Circle. Why not an Asian American Student Center?</p>
    <p class="text body-text">There is an urgency and importance of adding an Asian American-focus to student services. We are the largest and fastest-growing minority student population at UNC, yet we are the only group with no dedicated space:
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
