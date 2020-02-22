import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./article-preview.module.css"

export default ({ article }) => (
  <div
    className={styles.preview}
    style={{ padding: "1rem", border: "1px solid #282828" }}
  >
    <Img fluid={article.heroImage.fluid} />
    <p
      style={{
        textTransform: "uppercase",
        margin: "1rem 0 0.2rem 0",
        padding: "0",
        fontSize: "0.9rem",
      }}
    >
      {article.subtitle}
    </p>
    <h3 className={styles.previewTitle}>
      <Link to={`/case-study/${article.slug}`} className={styles.previewTitle}>
        {article.title}
      </Link>
    </h3>
    {/* <p>{article.entryDescription}</p>

    {article.scopeOfWork &&
      article.scopeOfWork.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))} */}
  </div>
)
