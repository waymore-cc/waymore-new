import React, { Component } from "react"
import "./MenuButton.css"

class MenuButton extends Component {
  render() {
    var visibility = "-r"

    if (this.props.menuVisibility) {
      visibility = " is-active"
    }
    return (
      <button
        className={"hamburger hamburger--emphatic" + visibility}
        type="button"
        onMouseDown={this.props.handleMouseDown}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      // <button
      //   id="roundButton"
      //   onMouseDown={this.props.handleMouseDown}
      // ></button>
    )
  }
}

export default MenuButton
