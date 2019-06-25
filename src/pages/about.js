import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about me" />

    <div class="about-block">
      <h1>about me!</h1>

      <div class="about-description">

        <div style= {{
          position: 'absolute',
          backgroundColor: 'black',
          width: '250px',
          height: '300px',
          zIndex: 'auto',
          paddingTop: '100px',
          paddingLeft: '100px',
        }}/>

        <div style={{
          paddingLeft: '50px',
          width: '450px',
        }}>
        
        <p>hi! i’m judy wong, designer and developer based on the east 
        coast, looking for full-time, post-grad opportunities.
        i’m currently in my last year of studies at northeastern 
        university, where i am pursuing a B.S. in computer 
        science/interactive media. </p>
        <p> my interests lie primarily in the intersection of design 
        and technology— how can i make a certain product more 
        usable and accessible? </p> 
        <p> when i’m not tinkering around on my laptop, or browsing 
        for new design inspiration, you can catch me on a photoshoot 
        (check out some of my shots here!), museum hopping, 
        or treasure hunting at the latest thrift store! </p>

        <p>check out my resume here and shoot me an email @ wong.ju@husky.neu.edu!</p>


        </div>
     

      </div>




    </div>


    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default AboutPage
