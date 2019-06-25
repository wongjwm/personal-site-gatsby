import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" />

    <h1>well, hello!</h1>
    <p>i'm judy wong. nyc-based designer & developer.</p>

    <p>check out some of my work <a href="/projects">here</a> and learn 
    more about me <a href="/about">here</a>!
    </p>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage