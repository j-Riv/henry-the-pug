import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Hero from '../components/hero'
import About from '../components/about'
import GridImage from '../components/gridImage'

const Title = styled.h3`
  margin-bottom: 5px;
`

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

interface Props {
  data: {
    allWpPost: any
    site: {
      siteMetadata: {
        title: string
      }
    }
    wpPage: {
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
}

const BlogIndex = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  const about = data.wpPage
  const posts = data.allWpPost.edges

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="All posts" />
      <Hero />
      <About about={about} />
      <Grid>
        {posts.map(({ node }: any) => {
          return <GridImage key={node.slug} node={node} />
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(slug: { eq: "about" }) {
      slug
      content
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allWpPost(limit: 6, skip: 0) {
      edges {
        node {
          content
          slug
          date
          title
          featuredImage {
            node {
              sourceUrl
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    originalName
                    originalImg
                    src
                    sizes
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
