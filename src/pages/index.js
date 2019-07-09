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

    <div className= 'hero' style= {{
      height: '400px',
    }}>
      
      <h1> well, hello!</h1>
      <p>i'm <b>judy wong</b>. designer & developer. city foodie at heart. </p>
      <p>learn more about me <a href="/about">here</a>! and check out my work <a href="/projects">here</a>!</p>

    </div>

    <div className='projects' style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "space-between",
    }}>

      {data.allMarkdownRemark.edges.map(({node}) => (
      <Link to={node.fields.slug}>
          <div className='box' key={node.id} style= {{
            backgroundImage: `url(${node.frontmatter.image.childImageSharp.fluid.src})`,
            backgroundSize: 'cover',
            backgroundColor: 'white',
          }} >
            <h3 style={{
              color: 'yellow',
              verticalAlign: 'middle',
              marginTop: '25px',
              marginLeft: '25px',
            }}>
              {node.frontmatter.title}{""}
            </h3>
          </div>
      </Link>
      ))}
    </div>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 980) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`