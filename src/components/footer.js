import { Link } from "gatsby"
import React from "react"

import "./footer.css"

const Footer = () => (
  <footer>

    <div className="footer-left-content">
      © {new Date().getFullYear()}, designed & developed by judy wong.
    </div>

    <div className="social-media-links">
      <a href="mailto:wong.ju@husky.neu.edu">email</a>
      <a href="https://www.linkedin.com/in/judy-wm-wong/">linkedin</a>
      <a href="https://github.com/wongjwm">github</a>
    </div>
  </footer>
)

export default Footer