require('dotenv').config()
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Henry the Pug`,
    author: `José A. Rivera`,
    description: `The life of Henry the Pug.`,
    siteUrl: `https://henrythepug.com`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.G_TAG, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henry the Pug`,
        short_name: `Henry The Pug`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `content/assets/henry-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WP_URL,
        verbose: true,
        schema: {
          timeout: 90000,
          requestConcurrency: 5,
          previewRequestConcurrency: 5,
        },
        production: {
          hardCacheMediaFiles: true,
          allow404Images: true,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          throwRefetchErrors: true,
          graphql: {
            writeQueriesToDisk: true,
            showQueryVarsOnError: true,
            showQueryOnError: true,
          },
        },
      },
    },
  ],
}
