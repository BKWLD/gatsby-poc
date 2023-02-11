import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Person({ data, params }) {
  return (
    <main>
      <Link to='/'>Home</Link>
      <h1>{ data.person.name }</h1>
      { data.person.image && <GatsbyImage
        image={ data.person.image.data }
        alt={ data.person.image.alt || "" }/> }
    </main>
  )
}

// Get person data
export const query = graphql`
  query GetPerson($slug: String) {
    person: contentfulPerson(slug: { eq: $slug }) {
      ...personCard
    }
  }
  fragment personCard on ContentfulPerson {
    ...personLink
    image {
      alt: title
      data: gatsbyImageData(width: 200)
    }
  }
`

// Defer generating all person detail pages but my own. FWIW, we could run
// GQL here and base it the result of that query
export function config() {
  return ({ params }) => {
    return {
      defer: true,
    }
  }
}
