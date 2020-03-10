import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className='title-wrap'>
        <div className='title'>{this.props.title}</div>
        <div className='subtitle'>{this.props.subtitle}</div>
      </div>
    );
  }
}

export default Header;
