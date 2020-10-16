/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "../../../styles/themes"

import "./global.css"
import "normalize.css"

const Layout = ({ children }) => (
  <ThemeProvider>
    <main>{children}</main>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
