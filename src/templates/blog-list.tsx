import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GridImage from '../components/gridImage'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StyledLink = styled(Link)`
  box-shadow: none;
`

const StyledPaginationLink = styled(Link)`
  font-weight: ${(props: { active: string }) =>
    props.active ? 'bold' : 'inherit'};
  color: ${(props: { active: string }) => (props.active ? '#000' : '#007acc')};
  padding: 5px;
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
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/' : '/' + (currentPage - 1).toString()
  const nextPage = '/' + (currentPage + 1).toString()

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="All posts" />
      <Grid>
        {posts.map(({ node }: any) => {
          return <GridImage key={node.slug} node={node} />
        })}
      </Grid>
      <div>
        {!isFirst && (
          <StyledPaginationLink to={`/blog` + prevPage} rel="prev">
            ← Previous Page
          </StyledPaginationLink>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <StyledPaginationLink
            key={`pagination-number${i + 1}`}
            to={`/blog/${i === 0 ? '' : i + 1}`}
            active={i + 1 === currentPage ? 'true' : ''}
          >
            {i + 1}
          </StyledPaginationLink>
        ))}
        {!isLast && (
          <StyledPaginationLink to={`/blog` + nextPage} rel="next">
            Next Page →
          </StyledPaginationLink>
        )}
      </div>
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
