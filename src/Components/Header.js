import React, { Component } from 'react';
import Profile from './Profile';

class Header extends Component {
  render() {
    return (
      <div style={{height: 85}}>
        <h1 style={{float: 'left'}}>Nama Produk</h1>
        <Profile />
      </div>
    );
  }
}

export default Header;