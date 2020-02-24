import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './article-preview.module.css';

export default ({ article }) => (
  <div className={styles.preview} style={{ padding: '1rem 0 0 0' }}>
    <Img
      fluid={article.heroImage.fluid}
      style={{
        borderBottom: 'solid 10px rgb(255, 12, 16)'
      }}
    />
    <div
      style={{
        padding: '1rem',
        backgroundColor: 'rgb(238, 248, 242)'
        // backgroundColor: 'rgb(248, 231, 176)'
      }}
    >
      <p
        style={{
          textTransform: 'uppercase',
          margin: '1rem 0 0.2rem 0',
          padding: '0',
          fontSize: '0.9rem'
        }}
      >
        <span style={{ color: '#a0a0a0' }}>CASE STUDY </span>
        {article.subtitle}
      </p>
      <h3 className={styles.previewTitle}>
        <Link
          to={`/case-study/${article.slug}`}
          className={styles.previewTitle}
        >
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
  </div>
);
