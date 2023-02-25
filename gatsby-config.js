require('dotenv-vault-core').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby POC`
  },
  plugins: [
    'gatsby-plugin-netlify',

    { // Contentful source
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: process.env.CONTENTFUL_HOST
      }
    },

    { // Shopify source
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_APP_PASSWORD,
        storeUrl: process.env.SHOPIFY_MYSHOPIFY_URL,
        salesChannel: process.env.SHOPIFY_APP_ID,
      },
    },

    { // Craft source (Bukwild)
      resolve: "gatsby-source-graphql",
      options: {
        typeName: 'CraftBukwild',
        fieldName: 'craftBukwild',
        url: process.env.BUKWILD_CRAFT_ENDPOINT,
      }
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
