import React from 'react'
import styled from 'styled-components'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

const Container = styled.footer`
  text-align: center;
  color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding-left: 7px;
    display: flex;
    align-items: center;
    &.github-link {
      color: #bc360a;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Container>
      © {new Date().getFullYear()}, Henry the Pug{' '}
      <a
        className="github-link"
        href="https://github.com/j-Riv/henry-the-pug"
        target="_blank"
        rel="noreferrer noopener"
        title="View Source Code"
      >
        <FaGithub />
      </a>
    </Container>
  )
}

export default Footer
