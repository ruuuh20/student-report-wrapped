import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderBottom: `#7d97b8 solid .5px`,
      marginBottom: `1rem`,
      // position: `fixed`
    }}
  >
    <div
    className="header-inner"
      style={{
        
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1rem 1.5rem`,
        
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#7d97b8`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
     
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
