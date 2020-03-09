import React from 'react';
import Seo from '../components/Seo';
// import Image from '../components/UI/Image/image';
// import classes from './index.module.css';
import ContentBox from '../components/UI/ContentBox/ContentBox';
import LogoStack from '../components/HomePage/LogoStack/LogoStack';

export default ({ pageContext, location }) => {
  return (
    <>
      <Seo title='Home' />

      <ContentBox centered>
        <h1
          className='display'
          // style={{ fontSize: '4.8rem', fontWeight: 'Bold', margin: '0.67em 0' }}
        >
          Everything creative.
        </h1>

        <div
          className='subSlogan'
          // style={{
          //   display: 'grid',
          //   marginTop: '-1rem',
          //   marginBottom: '5rem',
          //   gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))'
          // }}
        >
          <div>
            <h2 className='headingOne'>
              Tworzymy kreatywne rozwiązania w obszarze komunikacji i
              technologii.
              {/* Jesteśmy kolektywem kreatywnym – zajmujemy się komunikacją,
              designem i budową nowej kultury pracy. */}
            </h2>
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
          <h3>Social Media</h3>
          <h2>eCommerce & Web Development</h2>
          <h2>SEO/SEM</h2>
          <h2>UX/UI</h2>
        </ContentBox>
      </div>
      <ContentBox centered>
        <div style={{ margin: '4rem 0' }}>
          {/* <h1>Korzystamy z najnowszych technologii</h1> */}
          <LogoStack />
        </div>
      </ContentBox>
    </>
  );
};
