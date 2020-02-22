import React from "react"
import Img from "gatsby-image"
import classes from "./footer.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FaviconQuery {
      file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footerGrid}>
          <div>
            <p>Copyright © 2020 Waymore. All rights reserved.</p>
          </div>
          <div></div>
          <div>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Waymore's favicon"
              objectFit="cover"
              className={classes.favicon}
            />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
