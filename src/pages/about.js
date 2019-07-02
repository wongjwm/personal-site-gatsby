import React from "react"
import { Link } from "gatsby"
// import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"
import profilepic from '../images/profile-pic.jpg';

const AboutPage = () => (
  <Layout>
    <SEO title="about me" />

    <div className="about-block">
      <h2>about me!</h2>
      <div className="about-description">

      <img className= "profile-pic" src={profilepic}/>

        <div className="about-description-paragraph">
          <p>hi! i’m judy wong, designer and developer based on the east 
          coast. i’m currently in my last year of studies at northeastern 
          university, where i am pursuing a B.S. in computer 
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

        <div>
        <h3>skills</h3>

        <div className="skills-description">

          <div>
            <h4>design: </h4>
            <ul>
              <li>Sketch</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Indesign</li>
              <li>Invision</li>
              <li>Zeplin</li>
            </ul>
          </div>

          <div>
          <h4>code:</h4>
            <ul>
              <li>HTML/CSS + SASS</li>
              <li>Javascript</li>
              <li>React/React Native</li>
              <li>Swift</li>
              <li>Java</li>
            </ul>
          </div>

          <div>
          <h4>other:</h4>
            <ul>
              <li>Git</li>
              <li>XCode</li>
              <li>Jira</li>
            </ul>
          </div>
          
        </div>

        <p>check out my resume here and shoot me an email @ <a href="mailto:wong.ju@husky.neu.edu">wong.ju@husky.neu.edu</a></p>
        
      </div>

    </div>
  </Layout>
)

export default AboutPage