const path = require("path");


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const classTemplate = path.resolve("./src/templates/course.js")

  const res = await graphql(
    `
      {
        allContentfulClass {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )


    
       res.data.allContentfulClass.edges.forEach(edge => {
        createPage({
          path: `/courses/${edge.node.slug}`,
          component: classTemplate,
          context: {
            slug: edge.node.slug,
          },
        })
      })
   
    
    

}