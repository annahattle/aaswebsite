import React, { Component } from 'react';
import logo from './sun.png';
import wglogo from './wglogo.png';
import dm_graph from './unc_demographics.png';
import nc_bar from './nc_bar.png';
import course_data from './course_data.png';
import peer_comp from './trash_peer_chart.png';
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




  <p class=" text header-text">Who we are.</p>
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
        disciplines of humanities, arts, and social sciences. A hire for a <b>historian</b> who specializes in Asian American history.
      </p>
    </article>
  </section>

  <p class="text topic-text"> Our asks are not new. <b>So, why now?</b> </p>
  <p class="text sub-topic-text">
    Because timing matters. The campus climate is changing because
    students have organized to affect change (<a href="https://www.nytimes.com/2018/08/21/us/unc-silent-sam-monument-toppled.html">Removal of Silent Sam</a>, <a href="https://www.dailytarheel.com/article/2019/02/latinx-center-bot-0204"> Carolina Latinx Center</a>,
      the subsequent <a href="https://www.nytimes.com/2019/01/15/us/silent-sam-statue-removal-unc.html">change in administration</a>) --
       and neither will it stop changing (<a href="https://www.nytimes.com/2019/01/18/us/unc-affirmative-action-lawsuit.html?smprod=nytcore-ipad&smid=nytcore-ipad-share">upcoming affirmative action case</a>).
      There have been continuous efforts over the past 30 years
      to bring Asian American Studies/resources to UNC, and NOW, when there is so much momentum on this campus, is the time. </p>

    <p class="text header-text">Brief description of AAS. </p>
    <p class="text topic-text">There is a difference between Asian Studies and Asian American Studies (AAS). </p>
    <p class="text body-text">Unlike <b>Asian Studies</b>, which focuses on the history,
    politics, culture, and experiences of Asian people living in Asia, <b>Asian American Studies</b> is
    interested in the history, politics, culture, experiences, of Asians
      living in the United States. Asian American Studies emerged out of the Civil Rights Movement in the 1960s and 1970s.
      During the Third World Liberation Movement, students of Color at San Francisco University demanded
      their college curriculum reflect the diverse histories of ethnic populations in the US that have existed for hundreds
      of years. An incredible demonstration of coalition building, the rise of Ethnic Studies, including AAS,
      was a powerful example of reaching across communities to recognize shared experiences of oppression and political challenges.
      Below shows a cross course comparison between the two areas of study: </p>
      <p class="edit-text sub-topic-text">[insert chart]</p>

    <p class="text header-text">Why AAS at UNC.</p>
    <p class="text topic-text">First: why AAS at all? </p>
    <p class="text sub-topic-text">Because AAS is a valuable intellectual field, enrichening for <b>all</b> students.</p>
    <p class="text body-text">Can you name five historical Asian American figures? Five Asian American authors? Five Asian American activists? Were you ever taught about them in class? If knowledge is power—which schools love to preach—then what does it mean for the narratives, perspectives, and experiences of white European Americans to dominate mainstream curricula? More often than not, the study of American history is the study of white Euro-American history. American people of color are brought into the picture, but only as they exist in relation to white Americans: students only hear about slavery and Civil Rights, Japanese internment, the Trail of Tears, Texas annexation, and so on. Otherwise, the perspectives of non-white Americans are either forgotten, silenced, or sanitized. Rarely are they taught as having dignity as Americans in their own right. Ethnic studies, like Asian American studies, are necessary to fill gaps in perspective, in history, but also literature, politics, gender studies, and more. Ethnic studies, like Asian American studies, are necessary to redefine the notion of Americanness, both politically and personally. When students are not taught about significant Asian American figures, policies, or events, the presumption is that they do not exist. Most do not realize that Asian people have been in the Americas since the sixteenth century and have been with the United States since its inception. In other words, in the realm of all things Asian American, there is a lot to study. How has immigration and naturalization policy shaped Asian America? How do writers, poets, and artists both reflect and create the Asian American experience? How do Asian American women and queer Asian Americans navigate their respective spaces? Scholars cannot pretend that a full understanding of the United States is possible without AAS, just as how it is not possible without the inclusion of Black or Latinx or native narratives, or any other identities of race, gender and sexuality, class, or religion for that matter. Thus, AAS should be relevant to all those interested in studying America, not just for Asian American students. AAS is a means to contextualizing the Asian American community today, as a group that has been, just this summer, entangled in discussions of income inequality, affirmative action, and refugee and undocumented migration. As celebrated activist Yuri Kochiyama said: “Unless we know ourselves and our history, and other people and their history, there is really no way that we can really have [the] positive kind of interaction where there is real understanding.” - taken from Duke's Disorientation Guide</p>
    <button onclick="myFunction()" id="myBtn">Read more</button>

    <p class="text topic-text">Second: why AAS now and here?</p>
    <p class="text sub-topic-text"><i>“As the nation’s fastest-growing racial or ethnic group,
    Asian Americans are at the nexus of two vectors of 21st-century America:
    the growing dominance of China and Asia, and the approaching “new American majority” of
    nonwhite peoples. Study of these issues is needed in our present moment of border walls,
    economic disparity and globalization...serious scholarship cannot
    thrive without an institutional foundation.”</i> - <a href="https://www.washingtonpost.com/opinions/will-harvard-continue-to-fail-asian-americans--or-will-it-learn-from-the-past/2019/02/12/80fb1492-2f04-11e9-86ab-5d02109aeb01_story.html?fbclid=IwAR2spqgqEHaETcnUsPe_FaGnnY3RpMkxjRcvhtJ6ez_YsoDqlgsHhGR8bXk&utm_term=.b4ab60d3fff1">
    Renee Tajima-Peña</a>, professor of Asian American Studies at UC Berekeley</p>
    <p class="text body-text"><b>No such foundation exists at UNC.</b> Especially
    as a public institution positioned in the South, the changing landscape of both North Carolina and the South as a region
    further add to the relevance of Asian American Studies <b>here</b>: <i>What is the significance of a growing Asian
        American student population at UNC, NC and nationwide,
        and the implications on policy, economy, education, social transformation?
        What histories have been hidden or forgotten, and how can students and UNC as an
        institution move forward in recognizing and listening to marginalized voices?
        How does a growing NC Asian American population complicate the traditional notion of a Black & White South?</i> </p>


    <p class="text body-text">In the state of North Carolina.
    North Carolina’s Asian population is the fastest-growing racial/ethnic group in the state.
    Between 2000 and 2010, North Carolina’s Asian-American population grew by 85% — <b>the fastest rate
    among Southern states and the 3rd fastest in the country</b>:</p>
    <img src={nc_bar} className="nc_bar" />


    <p class="text topic-text">Third: Who wants it?</p>
    <p class="text sub-topic-text">In 2017, Working Group started a letter writing campaign with the AAPI
    student body to voice their desires for Asian American Studies. We received <b>200 letters</b>.</p>
    <p class="edit-text sub-topic-text">[pull quotes?]</p>
    <p class="text header-text">What UNC offers for AAS.</p>
    <p class="text topic-text">The University currently offers no program of study, minor, or major in AAS. </p>
    <p class="text sub-topic-text">Here are the few courses that have been offered in Asian American topics:</p>

    <img src={course_data} className="course_data" />
    <p class="text sub-topic-text">Only <b>5 different courses</b> in Asian American topics have been taught at UNC --
    the few courses that are offered are <b>not offered regularly</b>.</p>
    <p class="text sub-topic-text">Almost all courses offered in Asian American
    topics were either <b>at max capacity or near max capacity</b> --
    courses with less than 75% had not been taught in <b>at least than 2.5 years</b>.</p>
    <p class="text sub-topic-text">Furthermore, these courses are taught by the same few professors (listed below). Currently, there is <b>no
    faculty member specialized in Asian American history</b>.</p>

    <p class="text body-text"><a href="https://englishcomplit.unc.edu/faculty-directory/jennifer-ho/">Jennifer Ho</a>: Professor, Department of English and Comparative Literature; Associate Director,
Institute for the Arts and Humanities</p>
<p class="text body-text"><a href="http://heidikim.web.unc.edu/">Heidi Kim</a>: Associate Professor, Department of English and Comparative Literature</p>
<p class="text body-text"><a href="https://asianstudies.unc.edu/faculty/dr-ji-yeon-o-jo/">Ji-Yeon Jo</a>: Associate Professor, Department of Asian Studies</p>

    <p class="text header-text">Why this is not enough - peer comparison.</p>
    <p class="text topic-text">13/15 of our peer institutions offer a formalized program of study in Asian American Studies,
      and/or a major and/or a minor. </p>
    <img src={peer_comp} className="peer_comp" />
    <p class="text body-text">UNC is lagging behind its peer institutions in preparing its students to understand the significance of the Asian American population increase both in North Carolina and nationwide. They are
      failing to provide the adequate curriculum and student services to prepare its students for local and national changes in America’s political and social landscapes.</p>

    <p class="text header-text">Why an Asian American Student Center.</p>
    {/*<p class="text topic-text">Sonja Haynes Stone Center. Carolina Latinx Center. Carolina Indian Circle. Where is the Asian American Student Center?</p>*/}
    <p class="text body-text">The Asian American population at UNC is the <b>largest
    and fastest-growing</b> minority student population at UNC. Which makes it even more baffling
    that there exists no dedicated space for Asian Americans on campus. As the Asian American population
    continues to grow, there is an <b>urgency and importance</b> to adding an Asian
    American-focus to student services. Although Asian Americans may not be underrepresented
    in terms of raw numbers, we are still subject to discrimination, microagressions, and racism.
    We deserve to be recognized -- and not as a "diverse" face on a campus brochure.
    We want real resources for our community, across all facets -- academically,
    socially, and mentally. </p>

    <img src={dm_graph} className="dm_graph" />
    <p class="text sub-topic-text">In the past 8 years, the Asian American student population has <b>more than doubled</b>. In 2010,
    Asian Americans comprised 8.6% of the total undergraduate student population; in 2018, this number is now 16%. However, resources
    for Asian American students at UNC, academically and socially, have not kept up pace at all - our asks are long overdue. </p>


    <p class="edit-text sub-topic-text">[insert x organizations endorse this]</p>




</body>
      </div>
    );
  }
}


export default App;
