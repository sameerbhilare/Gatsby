const path = require("path")
const slugify = require("slugify")

// function name - 'createPages' is imp.
// Refer - Gatsby Node APIs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  // create page for each 'tag'
  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        // path/url for a tag
        path: `/tags/${tagSlug}`,
        // template to create a tag page. Using path, since we are in nodejs code
        component: path.resolve(`src/templates/tag-template.js`),
        //  Add optional context data to be inserted as props (props.pageContext) into the page component (tag-template.js).
        // The context data can also be used as arguments to the page GraphQL query
        context: {
          tag: tag,
        },
      })
    })
  })
}
