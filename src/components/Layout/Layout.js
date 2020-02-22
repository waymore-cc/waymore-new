import React from "react"
import classes from "./layout.module.css"
import Header from "../Layout/Header/Header"
import Footer from "../Layout/Footer/Footer"
import Navigation from "./Navigation/Navigation"

const Layout = ({ location, children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main>{children}</main>
      <div
        style={{
          backgroundColor: "#fff",
          borderTop: "2px solid #282828",
        }}
      >
        <div
          style={{
            padding: "3rem 1rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            color: "#000",
            maxWidth: "1180px",
            margin: "0 auto",
            gridGap: "7rem",
          }}
        >
          <Navigation />
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
