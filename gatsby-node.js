const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const caseStudy = path.resolve("./src/templates/case-study.js")
    resolve(
      graphql(
        `
          {
            allContentfulCaseStudy {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulCaseStudy.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/case-study/${post.node.slug}/`,
            component: caseStudy,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
