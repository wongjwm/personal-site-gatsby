import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        display: 'flex',
        justifyContent: 'space-between',
        height: '60px',
      }}
    >
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>

      <div>
        <nav>
          <ul style={{
            display:'flex',
            flex:'1'
          }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: 'none',
                  padding: '1rem',
                  letterSpacing: `0.1em`,
                  textDecoration: `none`,
                  fontSize: `25px`,
                  fontWeight: `800`,
                }}
                >
                <Link style={{ color:'#004953'}} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
