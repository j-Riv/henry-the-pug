import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  text-align: center;
  color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()}, Henry the Pug - Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  )
}

export default Footer
