import React from "react"
// import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import Image from "../components/UI/Image/image"
import ContentBox from "../components/UI/ContentBox/ContentBox"

export default ({ pageContext, location }) => {
  return (
    <>
      <Seo title="Home" />

      <ContentBox centered>
        <p
          style={{ fontSize: "4.8rem", fontWeight: "Bold", margin: "0.67em 0" }}
        >
          Tworzymy komunikację zorientowaną na odbiorców mediów cyfrowych.
        </p>

        <div
          style={{
            display: "grid",
            marginTop: "-3rem",
            marginBottom: "5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(28rem, 1fr))",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.8rem",
                margin: "0.67em 0",
              }}
            >
              Znacznie więcej niż agencja reklamowa – Waymore, to kolektyw
              kreatywny, gdzie poza tworzeniem świetnych projektów, budujemy
              nową kulturę pracy.
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
          backgroundColor: "#f0f4f6",
          padding: "3rem 1rem",
          marginTop: "-2px",
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
  )
}
