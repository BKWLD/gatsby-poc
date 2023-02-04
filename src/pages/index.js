import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <h1>
        Hey, { data.person.name }
      </h1>
      <div>
        <GatsbyImage
          image={ data.person.image.data }
          alt={ data.person.image.alt || "" }/>
      </div>
      <p>Would you like to buy a { data.product.title }?</p>
      <div>
        <GatsbyImage
          image={ data.product.image.data }
          alt={ data.product.image.alt || "" }/>
      </div>
    </main>
  )
}

export const query = graphql`
  query {
    person: contentfulPerson(slug: {eq: "robert-reinhard"}) {
      name
      image {
        alt: title
        data: gatsbyImageData(width: 200)
      }
    }
    product: shopifyProduct(handle: {eq: "grey-sofa"}) {
      title
      image: featuredImage {
        alt: altText
        data: gatsbyImageData
      }
    }
  }
`

const pageStyles = {
  color: "#232129",
  padding: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export default IndexPage

export const Head = () => <title>Home Page</title>
