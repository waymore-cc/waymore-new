import React from "react"
// import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import ContentBox from "../components/UI/ContentBox/ContentBox"

export default ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  // Example of dynamically using location prop as a crumbLabel
  const customCrumbLabel = location.pathname
    .toLowerCase()
    .replace("/", " ")
    .replace("-", " ")

  return (
    <>
      <Seo title="O nas" />

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
      </ContentBox>
    </>
  )
}
