import React from 'react';
import Img from 'gatsby-image';
// import classes from './footer.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const LogoStack = props => {
  const data = useStaticQuery(graphql`
    query LogoStack {
      allContentfulLogoStack {
        edges {
          node {
            logos {
              contentful_id
              title
              fluid(maxHeight: 160) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);
  const logosArray = data.allContentfulLogoStack.edges[0].node.logos;
  console.log(logosArray);

  //   const { logos } = data.contenfulLogoStack.children.fixed;
  //   console.log(data.allContentfulLogoStack.edges);
  //   const logoArray = data.allContentfulLogoStack.edges.node;
  //   console.log(logoArray);
  return (
    <>
      <div
        style={{
          //   display: 'grid',
          //   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          //   gridGap: '1rem'
          //   gridGap: '1rem'
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {logosArray.map(({ contentful_id, fluid, title }) => {
          console.log(title);
          return (
            <div
              style={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                flex: '169px 0 0'
              }}
            >
              <Img
                fluid={fluid}
                alt={title}
                key={contentful_id}
                objectFit='contain'
                style={{
                  height: 'auto',
                  boxSize: 'border-box',
                  width: '160px',
                  display: 'block',
                  //   backgroundColor: 'lightgrey'
                  border: '1px dashed #c8c8c8',
                  margin: '1rem auto',
                  filter: 'grayscale(100%)'
                }}
              />
              <p style={{ textAlign: 'center' }}>{title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LogoStack;
