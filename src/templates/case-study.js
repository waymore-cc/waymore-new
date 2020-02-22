import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
// import Layout from "../components/Layout/Layout"
// import Layout from "../components/LayoutCaseStudy"

class CaseStudyTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulCaseStudy")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <>
        <div>
          <div style={{ background: "#fff" }}>
            <Helmet title={`${post.title} | ${siteTitle}`} />
            <div className="wrapper">
              <h1 className="section-headline">{post.title}</h1>
              <ul>
                {post.scopeOfWork.map(task => {
                  return <li key={task}>{task}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      scopeOfWork
    }
  }
`
