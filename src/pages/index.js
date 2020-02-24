import React from 'react';
import Seo from '../components/Seo';
// import Image from '../components/UI/Image/image';
import classes from './index.module.css';
import ContentBox from '../components/UI/ContentBox/ContentBox';

export default ({ pageContext, location }) => {
  return (
    <>
      <Seo title='Home' />

      <ContentBox centered>
        <p
          className={classes.display}
          // style={{ fontSize: '4.8rem', fontWeight: 'Bold', margin: '0.67em 0' }}
        >
          Anything creative.
        </p>

        <div
          className={classes.subSlogan}
          // style={{
          //   display: 'grid',
          //   marginTop: '-1rem',
          //   marginBottom: '5rem',
          //   gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))'
          // }}
        >
          <div>
            <p className={classes.headingOne}>
              Jesteśmy kolektywem kreatywnym – zajmujemy się komunikacją,
              designem i budową nowej kultury pracy.
            </p>
          </div>

          {/* <div style={{ marginTop: "-70px" }}>
            <Image alt="Observer drawing" filename="observer2.png" />
          </div> */}
        </div>
      </ContentBox>
      <div
        style={{
          // backgroundColor: "rgb(181, 227, 209)",
          backgroundColor: '#f0f4f6',
          padding: '3rem 0',
          marginTop: '-2px'
        }}
      >
        <ContentBox centered>
          <h1>Co możemy dla Ciebie zrobić?</h1>
          <h2>Branding</h2>
          <h2>Social Media</h2>
          <h2>eCommerce & Web Development</h2>
          <h2>SEO/SEM</h2>
          <h2>UX/UI</h2>
        </ContentBox>
      </div>
    </>
  );
};
