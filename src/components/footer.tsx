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

const Footer: React.FC = () => {
  return <Container>© {new Date().getFullYear()}, Henry the Pug</Container>
}

export default Footer
