import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

interface Props {
  data: {
    wpPost: {
      title: string
      content: string
      featuredImage: {
        node: {
          sourceUrl: string
          localFile: {
            childImageSharp: {
              fluid: any
            }
          }
        }
      }
    }
  }
}

const Post = ({ data }: Props) => {
  const post = data.wpPost

  return (
    <Layout location={window.location} title={post.title}>
      <SEO title={post.title} />
      <h1>The Title {post.title}</h1>
      <Img fluid={post.featuredImage.node.localFile.childImageSharp.fluid} />
      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
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
`
