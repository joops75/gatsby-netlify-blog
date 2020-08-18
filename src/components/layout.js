import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

import Sidebar from "./sidebar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(36),
          }}
        >
          <header
            style={{
              textAlign: `center`,
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >{header}</header>
          <div
            style={{
              display: `flex`,
              flexWrap: `wrap`,
            }}
          >
            <main
              style={{
                flex: `70%`,
                minWidth: rhythm(12),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >{children}</main>
            <aside
              style={{
                flex: `30%`,
                minWidth: rhythm(6),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            ><Sidebar /></aside>
          </div>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
