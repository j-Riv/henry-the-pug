import React from 'react'
import styled from 'styled-components'
import Nav from './nav'
import Footer from './footer'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  background: black;
  main {
    padding-top: ${(props: { paddingTop: number }) => `${props.paddingTop}px`};
  }
  .wrap {
    width: 85%;
    margin: 0 auto;
  }
`

interface Props {
  location: Location
  title: string
  children?: any
}

const Layout: React.FC<Props> = ({ children }) => {
  let paddingTop = 72
  let backgroundColor = 'black'

  return (
    <Container paddingTop={paddingTop}>
      <Nav position="absolute" backgroundColor={backgroundColor} />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
