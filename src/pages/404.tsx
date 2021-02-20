import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const NotFoundPage: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Container>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
