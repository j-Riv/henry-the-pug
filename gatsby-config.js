require('dotenv').config()
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Henry the Pug`,
    author: `José A. Rivera`,
    description: `The life of Henry the Pug.`,
    siteUrl: `https://henrythepug.com`,
    social: {
      twitter: `iam_jRiv`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby WP Starter`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // ex: `https://example.com/graphql`,
        url: process.env.WP_URL,
        verbose: true,
        html: {
          imageMaxWidth: 800,
          imageQuality: 80,
        },
        schema: {
          timeout: 120000,
          requestConcurrency: 50,
          perPage: 50,
        },
        type: {
          __all: {
            limit: 500,
          },
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
      },
    },
  ],
}
