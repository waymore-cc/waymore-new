import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
  render() {
    var visibility = '-r';

    if (this.props.menuVisibility) {
      visibility = ' is-active';
    }
    return (
      <button
        className={'hamburger hamburger--emphatic' + visibility}
        type='button'
        onMouseDown={this.props.handleMouseDown}
      >
        <span style={{ color: 'azure', marginRight: '8px' }}>menu</span>
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
    );
  }
}

export default MenuButton;
