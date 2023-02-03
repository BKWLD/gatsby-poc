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
    </main>
  )
}

export const query = graphql`
  query GetRobert {
    person: contentfulPerson(slug: {eq: "robert-reinhard"}) {
      id
      name
      image {
        file {
          url
        }
        gatsbyImage(fit: COVER, width: 1024)
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
