import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
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
      {posts.map(({ node }: any) => {
        const title = node.title || node.slug
        return (
          <div key={node.slug}>
            <Title>
              <StyledLink to={`/blog/` + node.slug}>{title}</StyledLink>
            </Title>
            <small>{node.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.content || node.excerpt,
              }}
            />
          </div>
        )
      })}
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
          date
          slug
          title
        }
      }
    }
  }
`
