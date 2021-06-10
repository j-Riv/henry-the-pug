import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface WpPage {
  title: string
  content: string
  featuredImage: FeaturedImage
}

export interface WpPost {
  title: string
  content: string
  excerpt: string
  slug: string
  featuredImage: FeaturedImage
}

export interface FeaturedImage {
  node: {
    altText: string
    caption: string
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}
