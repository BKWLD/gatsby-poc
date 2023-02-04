exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all of the towers
  // const towers = await graphql(`
  //   query MyQuery {
  //     towers: allContentfulTower(limit: 10) {
  //       edges {
  //         node {
  //           title
  //           seoImage {
  //             gatsbyImage(width: 900)
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)


}
