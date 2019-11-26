import React from 'react';
import './TextBox.css';
import ideas from '../../TravelTip.js';


class TextBox extends React.Component {
  displayTravelIdea() {
    const { index } = this.props;
    return ideas[index];
  }

  render() {
    const idea = this.displayTravelIdea();

    return (
      <div className="textbox">
        <div className="compare">
          <h3>{idea.title}</h3>
        </div>
        <div className="description">
          <p>{idea.description}</p>
        </div>
      </div>
    )
  }
}

export default TextBox;
