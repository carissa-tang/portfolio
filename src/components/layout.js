/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useViewport from "../utils/useViewport"
import "./layout.css"

const Layout = ({ children }) => {
  const { isDesktop } = useViewport()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
        }
      }
    `
  )

  return (
    <>
      <div
        style={{
          margin: `2.5rem auto`,
          padding: `0 1.0875rem 1.45rem`,
          position: "relative",
        }}
      >
        <main>{children}</main>
        {isDesktop ? (
          <footer
            style={{
              marginTop: `2rem`,
              right: "2rem",
              position: "absolute",
              fontSize: "0.8rem",
            }}
          >
            © built on {site.buildTime}, with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        ) : (
          <footer
            style={{
              marginTop: `2rem`,
              right: "1.5em",
              position: "absolute",
              fontSize: "0.5rem",
            }}
          >
            © built on {site.buildTime}, with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
