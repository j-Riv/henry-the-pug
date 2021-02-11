import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: {
    wpPage: {
      title: string
      content: string
    }
  }
}

const Page = ({ data }: Props) => {
  const StaticPage = data.wpPage

  return (
    <Layout location={window.location} title={`Title: ` + StaticPage.title}>
      <SEO title={StaticPage.title} />
      <h1>{StaticPage.title}</h1>
      <div>{StaticPage.content}</div>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
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
