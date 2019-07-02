import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"
import ProjectPage from "./projects";

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" />

    <div className= 'hero' style = {{
      height: '600px'
    }} >
      
      <h1> well, hello!</h1>
      <p>i'm <b>judy wong</b>. nyc-based designer & developer.</p>
      <p>learn more about me <a href="/about">here</a>! and check out my work <a href="/projects">here</a>!</p>

    </div>
    
  </Layout>
)

export default IndexPage
