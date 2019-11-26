import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Travel-Go-Budget</h1>
        <span>Expertly-sourced ideas for off-the-beaten path travel destinations</span>
      </div>
    )
  }
}

export default Header;
