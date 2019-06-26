import { Link } from "gatsby"
import React from "react"

import "./footer.css"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, designed & developed by judy wong. 
    built with
    {` `}
    <a href="https://www.gatsbyjs.org">gatsby</a>
  </footer>
)

export default Footer