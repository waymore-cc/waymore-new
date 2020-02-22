import React, { Component } from "react"
import classes from "./header.module.css"
import Logo from "../Logo/Logo"
import MenuButton from "../ResponsiveMenu/MenuButton"
import Menu from "../ResponsiveMenu/Menu"

class Header extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      visible: false,
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleMouseDown(e) {
    this.toggleMenu()

    // console.log("Click area was clicked!")
    // e.stopPropagation()
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <>
        <header className={classes.header}>
          <div
            style={{
              // maxWidth: "1280px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Logo />
            <MenuButton
              handleMouseDown={this.handleMouseDown}
              menuVisibility={this.state.visible}
            />
          </div>
        </header>
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </>
    )
  }
}

export default Header
