import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { WpPost } from '../types/wordpress'

const Container = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
    max-width: 100%;
    div {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
    img {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
`

interface Props {
  node: WpPost
}

const GridImage: React.FC<Props> = props => {
  const { node } = props
  return (
    <Container>
      <Link to={`/blog/${node.slug}`}>
        <GatsbyImage
          image={
            node.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          }
          alt={
            node.featuredImage.node.altText
              ? node.featuredImage.node.altText
              : node.title
          }
          loading="lazy"
        />
      </Link>
    </Container>
  )
}

export default GridImage
