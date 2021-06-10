import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'

const NavBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 1s;
  z-index: 10;
  background: ${(props: Props) => props.backgroundColor};
  .wrap {
    width: 85%;
    margin: 0 auto;
  }
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
        display: inline-flex;
        align-self: center;
      }
      li + li {
        margin-left: 15px;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        &:hover {
          color: #bc360a;
        }
      }
    }
  }
  .logo {
    width: 100px;
    height: auto;
    margin: 8px 0;
  }
  .nav-icon {
    display: inline-flex;
    align-self: center;
    svg {
      height: 1em;
      width: 1em;
    }
    &.svg-baseline {
      top: 0.125em;
      position: relative;
    }
  }
`
interface Props {
  position?: string
  backgroundColor: string
}

const Nav: React.FC<Props> = props => {
  const { logo } = useStaticQuery(
    graphql`
      {
        logo: file(relativePath: { eq: "henry-the-pug-logo.png" }) {
          childImageSharp {
            gatsbyImageData(width: 100, layout: CONSTRAINED)
          }
        }
      }
    `
  )

  return (
    <NavBar backgroundColor={props.backgroundColor}>
      <div className="inner wrap">
        <Link to="/">
          <GatsbyImage
            image={logo.childImageSharp.gatsbyImageData}
            className="logo"
            alt="Logo"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a
                className="nav-icon svg-baseline"
                href="https://instagram.com/puganddestroy"
                target="_blank"
                rel="noreferrer noopener"
                title="View Source Code"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </NavBar>
  )
}

export default Nav
