import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { WpPage } from '../types/wordpress'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 980px;
  @media only screen and (min-width: 1030px) {
    width: 100%;
    max-width: 1280px;
  }
  @media screen and (max-width: 1359px) {
    max-width: 980px;
  }
  .featured-image {
    text-align: center;
    img {
      max-height: 80vh;
      width: auto;
    }
  }
`

interface Props {
  location: Location
  data: {
    wpPage: WpPage
  }
}

const Page: React.FC<Props> = ({ location, data }) => {
  const StaticPage = data.wpPage

  console.log(
    JSON.stringify(
      StaticPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData
    )
  )

  return (
    <Layout location={location} title={`Title: ${StaticPage.title}`}>
      <SEO title={StaticPage.title} />
      <Container className="wrap">
        <h1>{StaticPage.title}</h1>
        <div className="featured-image">
          <GatsbyImage
            image={
              StaticPage.featuredImage.node.localFile.childImageSharp
                .gatsbyImageData
            }
            className="about-featured-image"
            alt={StaticPage.title}
          />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: StaticPage.content,
          }}
        />
      </Container>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 60
                placeholder: BLURRED
                layout: FIXED
              )
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
