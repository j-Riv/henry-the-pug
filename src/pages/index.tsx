import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Hero from '../components/hero'
import About from '../components/about'
import GridImage from '../components/gridImage'
import { WpPage, WpPost } from '../types/wordpress'

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 5px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`
interface Node {
  node: WpPost
}

interface Props {
  location: Location
  data: {
    allWpPost: {
      edges: Node[]
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
    wpPage: WpPage
  }
}

const BlogIndex: React.FC<Props> = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title
  const about = data.wpPage
  const posts = data.allWpPost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="I am Henry" />
      <Hero />
      <About about={about} />
      <Grid>
        {posts.map(({ node }: Node) => {
          return <GridImage key={node.slug} node={node} />
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(slug: { eq: "about" }) {
      slug
      content
      title
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
      }
    }
    allWpPost(sort: { fields: [date], order: DESC }, limit: 6, skip: 0) {
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
                  gatsbyImageData(
                    width: 800
                    quality: 100
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    aspectRatio: 1
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
