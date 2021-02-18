import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div``

interface Props {
  node: {
    content: string
    date: string
    excerpt: string
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
    slug: string
    title: string
  }
}

const GridImage = (props: Props) => {
  const { node } = props
  return (
    <Container>
      <Link to={`/blog/${node.slug}`}>
        <Img
          fluid={{
            ...node.featuredImage.node.localFile.childImageSharp.fluid,
            aspectRatio: 1,
          }}
          alt={node.title}
        />
      </Link>
    </Container>
  )
}

export default GridImage
