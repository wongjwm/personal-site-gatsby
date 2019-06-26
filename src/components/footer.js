import { Link } from "gatsby"
import React from "react"

import "./footer.css"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Designed & Developed by Judy Wong. 
    Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer