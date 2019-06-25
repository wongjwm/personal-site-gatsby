import React from "react"
import { Link, graphql } from "gatsby"
 
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title}{""}
        </h3>
        <span>
          - {node.frontmatter.date}
        </span>
      </div>
    ))}
    </div>


    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default ProjectPage


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
        }
      }
    }
  }
`