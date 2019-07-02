import React from "react"
import { Link, graphql } from "gatsby"
 
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './projects.css'

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>projects</h1>
    
    <div className='projects' style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "space-between",
    }}>

      {data.allMarkdownRemark.edges.map(({node}) => (
        <div className='box' key={node.id} style= {{
          backgroundImage: `url(${node.frontmatter.image.childImageSharp.fluid.src})`,
        }} >
          <Link to={node.fields.slug}>
            <h3 style={{
              textAlign: 'center',
              verticalAlign: 'middle',
              marginTop: '110px',
            }}>
              {node.frontmatter.title}{""}
            </h3>
          </Link>
        </div>
      ))}
    </div>
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