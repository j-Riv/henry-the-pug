import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { WpPost } from '../types'

const Container = styled.div``

interface Props {
  node: WpPost
}

const GridImage: React.FC<Props> = props => {
  const { node } = props
  return (
    <Container>
      <Link to={`/blog/${node.slug}`}>
        <Img
          fluid={{
            ...node.featuredImage.node.localFile.childImageSharp.fluid,
            aspectRatio: 1,
          }}
          alt={
            node.featuredImage.node.altText
              ? node.featuredImage.node.altText
              : node.title
          }
        />
      </Link>
    </Container>
  )
}

export default GridImage
