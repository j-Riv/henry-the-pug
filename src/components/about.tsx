import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  background: #000;
  color: #fff;
  .about-content {
    max-width: 980px;
    position: relative;
    margin: 0 auto;
    padding: 15px;
    display: grid;
    gap: 2rem;
    grid-template-columns: 25% 1fr;
    @media only screen and (min-width: 1030px) {
      width: 100%;
      max-width: 1280px;
    }
    @media screen and (max-width: 1359px) {
      max-width: 980px;
    }
  }
`

interface Props {
  about: {
    slug: string
    content: string
    featuredImage: {
      node: {
        localFile: {
          childImageSharp: {
            fluid: {
              aspectRatio: number
              base64: string
              originalImg: string
              originalName: string
              sizes: string
              src: string
              srcSet: string
            }
          }
        }
        sourceUrl: string
      }
    }
  }
}

const About: React.FC<Props> = props => {
  const { about } = props
  return (
    <Container>
      <div className="about-content">
        <Img
          className="about-featured-image"
          fluid={about.featuredImage.node.localFile.childImageSharp.fluid}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: about.content,
          }}
        />
      </div>
    </Container>
  )
}

export default About
