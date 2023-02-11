require('dotenv-vault-core').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby POC`
  },
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: process.env.CONTENTFUL_HOST
      }
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_APP_PASSWORD,
        storeUrl: process.env.SHOPIFY_MYSHOPIFY_URL,
        salesChannel: process.env.SHOPIFY_APP_ID,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
  ]
}
