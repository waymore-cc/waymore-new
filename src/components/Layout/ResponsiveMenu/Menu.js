import React, { Component } from "react"
import "./Menu.css"
// import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import ContentBox from "../../UI/ContentBox/ContentBox"

/*eslint-disable */

class Menu extends Component {
  render() {
    var visibility = "hide"

    if (this.props.menuVisibility) {
      visibility = "show"
    }

    return (
      <>
        <div
          role="navigation"
          id="flyoutMenu"
          onMouseDown={this.props.handleMouseDown}
          className={visibility}
        >
          <ContentBox centered>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
                gridGap: "1rem",
                padding: "1px 0",
              }}
            >
              <Navigation />
              <div>
                <p>CONTACT</p>
                <h3 style={{ fontWeight: "400" }}>office@waymore.cc</h3>
              </div>
              <div>
                <p>NEWSLETTER</p>
              </div>
            </div>
          </ContentBox>

          <div
            id="paintLine"
            className={visibility}
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#000",
              marginTop: "2rem",
            }}
          ></div>
        </div>
      </>
    )
  }
}

export default Menu
