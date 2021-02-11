import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const StyledLargeTitle = styled.h1`
  margin-bottom: rhythm(1.5);
  margin-top: 0;
`

const StyledSmallTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

interface Props {
  location: Location
  title: string
  children?: any
}

const Layout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <StyledLargeTitle>
        <StyledLink to={`/`}>{title}</StyledLink>
      </StyledLargeTitle>
    )
  } else {
    header = (
      <StyledSmallTitle>
        <StyledLink to={`/`}>{title}</StyledLink>
      </StyledSmallTitle>
    )
  }

  return (
    <Container>
      <header>{header}</header>
      <StyledLink to={`/blog`}>All Posts</StyledLink>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

export default Layout
