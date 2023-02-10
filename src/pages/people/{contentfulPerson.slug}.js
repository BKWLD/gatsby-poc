import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Person({ data }) {
  return (
    <main>
      <h1>{ data.person.name }</h1>
      { data.person.image && <GatsbyImage
        image={ data.person.image.data }
        alt={ data.person.image.alt || "" }/> }
    </main>
  )
}

export const query = graphql`
  query GetPerson($slug: String) {
    person: contentfulPerson(slug: { eq: $slug }) {
      ...personCard
    }
  }
  fragment personCard on ContentfulPerson {
    id
    name
    image {
      alt: title
      data: gatsbyImageData(width: 200)
    }
  }
`
