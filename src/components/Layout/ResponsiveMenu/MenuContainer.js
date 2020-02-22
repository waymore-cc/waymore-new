import React, { Component } from "react"
import MenuButton from "./MenuButton"
import Menu from "./Menu"

class MenuContainer extends Component {
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

    console.log("Click area was clicked!")
    e.stopPropagation()
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
        {/* <ul>
          <li>
            <a href='https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501' target='_self'>Educated: A Memoir Hardcover – February 20, 2018
by Tara Westover </a>
          </li>
          <li><a href='https://www.goodreads.com/book/show/30223025-dread-nation' target='_self'>Dread Nation (Dread Nation #1)
by Justina Ireland</a></li>
          <li>
            <a href='https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501' target='_self'>Educated: A Memoir Hardcover – February 20, 2018
by Tara Westover </a>
          </li>
          <li><a href='https://www.goodreads.com/book/show/30223025-dread-nation' target='_self'>Dread Nation (Dread Nation #1)
by Justina Ireland</a></li>
          <li>
            <a href='https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501' target='_self'>Educated: A Memoir Hardcover – February 20, 2018
by Tara Westover </a>
          </li>
          <li><a href='https://www.goodreads.com/book/show/30223025-dread-nation' target='_self'>Dread Nation (Dread Nation #1)
by Justina Ireland</a></li>
          <li>
            <a href='https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501' target='_self'>Educated: A Memoir Hardcover – February 20, 2018
by Tara Westover </a>
          </li>
          <li><a href='https://www.goodreads.com/book/show/30223025-dread-nation' target='_self'>Dread Nation (Dread Nation #1)
by Justina Ireland</a></li>
        </ul> */}
      </div>
    )
  }
}

export default MenuContainer
