import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GridImage from '../components/gridImage'
import styled from 'styled-components'
import Pagination from '../components/pagination'

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 5px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
interface Props {
  data: {
    allWpPost: {
      edges: [
        {
          node: {
            content: string
            date: string
            slug: string
            title: string
          }
        }
      ]
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

const BlogList = ({ data, pageContext }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allWpPost.edges

  const { currentPage, numPages } = pageContext

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="Photo Blog" />
      <Grid>
        {posts.map(({ node }: any) => {
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
    allWpPost(limit: $limit, skip: $skip) {
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
