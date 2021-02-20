import React from 'react'
import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { WpPage } from '../types'

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
  data: {
    wpPage: WpPage
  }
}

const Page: React.FC<Props> = ({ data }) => {
  const StaticPage = data.wpPage

  console.log(
    JSON.stringify(
      StaticPage.featuredImage.node.localFile.childImageSharp.fixed
    )
  )

  return (
    <Layout title={`Title: ${StaticPage.title}`}>
      <SEO title={StaticPage.title} />
      <Container className="wrap">
        <h1>{StaticPage.title}</h1>
        <div className="featured-image">
          <Img
            className="about-featured-image"
            fixed={
              StaticPage.featuredImage.node.localFile.childImageSharp.fixed
            }
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
              fixed(width: 800, quality: 100) {
                originalName
                src
                ...GatsbyImageSharpFixed
              }
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
