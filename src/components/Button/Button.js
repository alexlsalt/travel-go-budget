import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <a href="http://localhost:3000/">Get a new travel tip!</a>
      </div>
    )
  }
}

export default Button;
