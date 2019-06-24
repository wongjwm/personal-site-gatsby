import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 960,
        height: '60px',
      }}
    >
      <h1 style= {{
        margin: '10px',
      }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
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
                }}
                >
                <Link style={{ color:'white '}} to={link.link}>
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
