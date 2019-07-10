import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"
import profilepic from '../images/profile-pic.jpg';
import 'aos/dist/aos.css'

class AboutPage extends React.Component {

  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init({duration: 1200})
  }

  componentDidUpdate() {
    this.aos.refresh();
  }

  render() {
    return (

      <Layout>
    <SEO title="about me" />

    <div className="about-block">
      <h2 data-aos='fade-right'>about me!</h2>
      <div className="about-description">

      <img className= "profile-pic" data-aos='fade-right' src={profilepic}/>

        <div className="about-description-paragraph" data-aos='fade-left' >
          <p>hi! i’m <b>judy wong</b>, designer and developer based on the east 
          coast. i’m currently in my last year of studies at northeastern 
          university in boston, where i'm pursuing a B.S. in computer 
          science & interactive media. </p>
          <p> my interests lie primarily in the intersection of design 
          and technology— how can i make a certain product more 
          usable and accessible? </p> 
          <p> when i’m not tinkering around on my laptop, or browsing 
          for new design inspiration, you can catch me on a photoshoot 
          (check out some of my shots here!), museum hopping, 
          or treasure hunting at the latest thrift store! </p>
        </div>

      </div>

      <div data-aos='fade-up'>
        <h3 style={{
            textDecoration: 'green underline wavy',
        }}>skills</h3>

        <div className="skills-description">

          <div>
            <h4>design: </h4>
            <ul>
              <li>sketch</li>
              <li>adobe photoshop</li>
              <li>adobe illustrator</li>
              <li>adobe indesign</li>
              <li>invision</li>
              <li>zeplin</li>
            </ul>
          </div>

          <div>
          <h4>code:</h4>
            <ul>
              <li>html/css + sass</li>
              <li>javascript</li>
              <li>react/react native</li>
              <li>swift</li>
              <li>java</li>
            </ul>
          </div>

          <div>
          <h4>other:</h4>
            <ul>
              <li>git</li>
              <li>xcode</li>
              <li>jira</li>
            </ul>
          </div>
        </div>
        <p>check out my resume <a href="https://drive.google.com/open?id=1D4-83HOKCjCfdoJMPPvFun8-yZ0ON-s8">here</a> and shoot me an email @ <a href="mailto:wong.ju@husky.neu.edu">wong.ju@husky.neu.edu</a></p>
        
      </div>

    </div>
  </Layout>

    )
  }
}

export default AboutPage