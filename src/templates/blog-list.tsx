import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GridImage from '../components/gridImage'
import styled from 'styled-components'
import Pagination from '../components/pagination'
import { WpPost } from '../types/wordpress'

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
  }
  pageContext: {
    currentPage: number
    limit: number
    numPages: number
    skip: number
  }
}

const BlogList: React.FC<Props> = ({ location, data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allWpPost.edges

  console.log('POSTS', posts)

  const { currentPage, numPages } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Photo Blog" />
      <Grid>
        {posts.map(({ node }: Node) => {
          return node.featuredImage && <GridImage key={node.slug} node={node} />
        })}
      </Grid>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
                    quality: 60
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    aspectRatio: 1
                    formats: [AUTO, WEBP]
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
