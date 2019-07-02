import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

import './project-template.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
     <Link to="/projects/">back to projects</Link>
      <div style={{
        paddingTop:"10px",
      }}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`