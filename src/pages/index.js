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

    <h1 style = {{
      paddingTop: '50px',
      fontSize: '56px',
      textShadow: '2px 2px #FF0000',
    }}> 
      well, hello!
    </h1>

    <p>i'm judy wong. nyc-based designer & developer.</p>

    <p>check out some of my work <a href="/projects">here</a> and learn 
    more about me <a href="/about">here</a>!
    </p>

      <div className='projects' style={{
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}>

      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{""}
            </h3>
          </Link>
        </div>
      ))}
      
    </div>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`