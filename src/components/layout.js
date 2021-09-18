

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Frame from "./frame"
import "./layout.css"
import SmoothScroll from "./smoothScroll"

const Layout = ({ children, user, url }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  



  return (
    <>
      <Frame user={user} url={url} />
      <SmoothScroll>
      <div>
        <main>{children}</main>
      </div>
      </SmoothScroll>
      <footer>
        {" "}
        <div className="container footer-inner">
          <small>updated: May 2021</small>
          <small>&copy; peakeducation</small>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
