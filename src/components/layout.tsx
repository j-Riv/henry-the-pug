import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Nav from './nav'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  /* padding: 15px; */
  background: black;
  main {
    padding-top: ${(props: { paddingTop: number }) => `${props.paddingTop}px`};
  }
  footer {
    text-align: center;
    color: #fff;
  }
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
  let paddingTop = 72
  let backgroundColor = 'black'
  if (location.pathname === rootPath) {
    paddingTop = 0
    backgroundColor = 'transparent'
  }
  return (
    <Container paddingTop={paddingTop}>
      <Nav position="absolute" backgroundColor={backgroundColor} />
      <main>
        {/* <StyledLink to={`/blog`}>All Posts</StyledLink> */}
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

export default Layout
