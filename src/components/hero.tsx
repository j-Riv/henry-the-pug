import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: #fff;
    text-transform: uppercase;
  }
`

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* z-index: -1; */
  height: ${(props: Props) => props.height || '100vh'};
  & > img {
    object-fit: ${(props: Props) => props.fit || 'cover'};
    object-position: ${(props: Props) =>
      props.position || '50% 50%'} !important;
  }
`

interface Props {
  position?: string
  fit?: string
  height?: string
  children?: any
}

const Hero = (props: Props) => {
  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "henry-portrait.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <BgImage
        fluid={heroImage.childImageSharp.fluid}
        fit="cover"
        height="100vh"
        position="center"
      />
      <Overlay>
        <h2>I am Henry</h2>
      </Overlay>
    </Container>
  )
}

export default Hero
