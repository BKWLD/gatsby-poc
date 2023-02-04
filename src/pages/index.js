import * as React from "react"
import { graphql } from 'gatsby'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <h1>
        Hey, { data.person.name }
      </h1>
      <p>
        Would you like to buy a { data.product.title }?
      </p>
    </main>
  )
}

export const query = graphql`
  query {
    person: contentfulPerson(slug: {eq: "robert-reinhard"}) {
      name
      image {
        gatsbyImage(fit: COVER, width: 1024)
      }
    }
    product: shopifyProduct(handle: {eq: "grey-sofa"}) {
      title
      variants {
        title
        price
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
