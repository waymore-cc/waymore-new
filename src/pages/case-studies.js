import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Seo from "../components/Seo"
import ArticlePreview from "../components/Layout/ArticlePreview/ArticlePreview"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import ContentBox from "../components/UI/ContentBox/ContentBox"

class CaseStudies extends React.Component {
  render() {
    const posts = get(this, "props.data.allContentfulCaseStudy.edges")
    const {
      breadcrumb: { crumbs },
    } = this.props.pageContext

    // Example of dynamically using location prop as a crumbLabel
    const customCrumbLabel = this.props.location.pathname
      .toLowerCase()
      .replace("/", " ")
      .replace("-", " ")

    return (
      <>
        <Seo title="Case Studies" />
        <ContentBox centered>
          <div
            style={{
              padding: "1rem 0",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=" – "
              crumbLabel={customCrumbLabel}
            />
          </div>

          <div>
            <h1 style={{ fontSize: "6rem" }}>Case Studies</h1>
            <div
              style={{
                margin: "2rem 0 6rem 0",
              }}
            >
              <div
                className="article-list"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
                  listStyle: "none",
                  gridGap: "3rem",
                }}
              >
                {posts.map(({ node }) => {
                  return (
                    <div key={node.slug}>
                      <ArticlePreview article={node} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </ContentBox>
      </>
    )
  }
}

export default CaseStudies

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCaseStudy {
      edges {
        node {
          title
          entryDescription
          slug
          scopeOfWork
          subtitle
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
