import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>

      {/* Contentful data with image */}
      <h1>
        Hey, { data.person.name }
      </h1>
      <div>
        <GatsbyImage
          image={ data.person.image.data }
          alt={ data.person.image.alt || "" }/>
      </div>

      {/* Shopify data with image */}
      <p>Would you like to buy a { data.product.title }?</p>
      <div>
        <GatsbyImage
          image={ data.product.image.data }
          alt={ data.product.image.alt || "" }/>
      </div>

      {/* Creating links to dynamic routes */}
      <h2>People from previous Bukwild site</h2>
      <ul>
        { data.people.nodes.filter(person => !!person.name).map(person => (
          <li key={ person.id }>
            <Link to={ person.url }>{ person.name }</Link>
          </li>
        ))}
      </ul>

      {/* Fetching data using generic GQL source */}
      <h2>Recent Bukwild articles</h2>
      <ul>
        { data.craftBukwild.articles.map(article => (
          <li key={ article.id }>
            <Link to={ article.url }>{ article.title }</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    person: contentfulPerson(slug: {eq: "robert-reinhard"}) {
      ...personCard
    }
    product: shopifyProduct(handle: {eq: "grey-sofa"}) {
      title
      image: featuredImage {
        alt: altText
        data: gatsbyImageData
      }
    }
    people: allContentfulPerson {
      nodes {
        ...personLink
      }
    }
    craftBukwild {
      articles: entries(section: "articles", limit: 5) {
        id
        title
        url
      }
    }
  }
  fragment personLink on ContentfulPerson {
    id
    name
    slug
    url: gatsbyPath(filePath:"/people/{contentfulPerson.slug}")
  }
`

const pageStyles = {
  color: "#232129",
  padding: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export default IndexPage

export const Head = () => <title>Home Page</title>
