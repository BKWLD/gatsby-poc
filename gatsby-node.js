exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // // Get a list of people
  // const { data: { people } } = await graphql(`
  //   query allPeople {
  //     people: allContentfulPerson {
  //       nodes {
  //         slug
  //       }
  //     }
  //   }
  // `)
  // people.nodes.forEach(({ slug }) => {
  //   createPage({
  //     path: `people/${slug}`,
  //     component: require.resolve('./src/'),
  //     context: { slug },
  //   })
  // })


}
