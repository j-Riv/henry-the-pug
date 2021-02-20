import React, { useEffect, useState } from 'react'
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

const Layout: React.FC<Props> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let paddingTop = 72
  let backgroundColor = 'black'
  if (location.pathname === rootPath) {
    paddingTop = 0
    backgroundColor = 'transparent'
  }

  const [navColor, setnavColor] = useState(backgroundColor)

  if (typeof window !== `undefined`) {
    const handleScroll = () => {
      if (location.pathname === rootPath) {
        if (window.scrollY > 50) {
          setnavColor('black')
        } else {
          setnavColor('transparent')
        }
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [handleScroll])
  }

  return (
    <Container paddingTop={paddingTop}>
      <Nav position="absolute" backgroundColor={navColor} />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
