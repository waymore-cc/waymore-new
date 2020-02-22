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
      <Seo title="Oferta" />

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
      <div
        style={{
          backgroundColor: "rgb(181, 227, 209)",
          padding: "3rem 1rem",
          marginTop: "-2px",
        }}
      >
        <ContentBox centered>
          <h1>Co możemy dla Ciebie zrobić?</h1>
          <h2>Branding</h2>
          <h3>Strategia marki & audyt</h3>
          <h3>Komunikacja</h3>
          <h2>Social Media</h2>
          <h3>SM Marketing</h3>
          <h3>Kampanie</h3>
          <h2>eCommerce & Web Development</h2>
          <h2>SEO/SEM</h2>
          <h2>UX/UI</h2>
        </ContentBox>
      </div>
    </>
  )
}
