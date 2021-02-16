import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NavBar = styled.div`
  /* position: ${(props: Props) => props.position || 'fixed'}; */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 1s;
  z-index: 10;
  background: ${(props: Props) => props.backgroundColor};
  .inner {
    max-width: 980px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration-line: none;
    a + a {
      margin-left: 15px;
    }
    @media only screen and (min-width: 1030px) {
      width: 100%;
      max-width: 1280px;
    }
    @media screen and (max-width: 1359px) {
      max-width: 980px;
    }
    ul {
      list-style: none;
      li {
        display: inline;
      }
      li + li {
        margin-left: 15px;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
      }
    }
  }
  .logo {
    width: 100px;
    height: auto;
    margin: 8px 0;
  }
`
interface Props {
  position?: string
  backgroundColor: string
}

const Nav = (props: Props) => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "henry-the-pug-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <NavBar backgroundColor={props.backgroundColor}>
      <div className="inner">
        <Link to="/">
          <Img className="logo" fluid={logo.childImageSharp.fluid} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </NavBar>
  )
}

export default Nav
