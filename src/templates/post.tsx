import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { WpPost } from '../types/wordpress'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 980px;
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1em;
    }
    .caption {
      font-size: 0.7em;
    }
  }
  @media only screen and (min-width: 1030px) {
    width: 100%;
    max-width: 1280px;
  }
  @media screen and (max-width: 1359px) {
    max-width: 980px;
  }
  h1 {
    font-family: 'Gloria Hallelujah', cursive;
    font-display: swap;
  }
  img {
    margin: 0 auto;
  }
`
const Polaroid = styled.div`
  transform: rotate(2deg);
  font-family: 'Gloria Hallelujah', cursive;
  font-display: swap;
  font-size: 2.5em;
  color: #000;
  text-align: center;
  border: 1px solid darkgrey;
  background-color: white;
  padding: 15px 15px;
  box-shadow: 4px 4px 6px rgba(255, 255, 255, 0.3);
  margin-bottom: 25px;
  .caption {
    transform: rotate(-2deg);
    @media screen and (max-width: 768px) {
      padding: 7px;
    }
    @media screen and (max-width: 1024px) {
      padding: 15px;
    }
  }
  position: relative;
  .gatsby-image-wrapper {
    display: block;
    width: 100%;
    margin: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
`

interface Props {
  location: Location
  data: {
    wpPost: WpPost
  }
}

const Post: React.FC<Props> = ({ location, data }) => {
  const post = data.wpPost

  return (
    <Layout location={location} title={post.title}>
      <SEO title={post.title} />
      <Container className="wrap">
        <h1>{post.title}</h1>
        <Polaroid>
          <GatsbyImage
            image={
              post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            }
            alt={
              post.featuredImage.node.altText
                ? post.featuredImage.node.altText
                : post.title
            }
          />
          <div
            className="caption"
            dangerouslySetInnerHTML={{
              __html: post.content
                ? post.content
                : 'Why can’t I pee in the house if you can?',
            }}
          />
        </Polaroid>
      </Container>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 60
                placeholder: BLURRED
                layout: FULL_WIDTH
                breakpoints: [750, 1080, 1366, 1920]
              )
            }
          }
        }
      }
    }
  }
`
