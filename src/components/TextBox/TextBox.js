import React from 'react';
import './TextBox.css';
import ideas from '../../TravelTip.js';


const randomIndex = Math.floor(Math.random() * ideas.length);

function displayTravelIdea () {
  return ideas[randomIndex];
}

const idea = displayTravelIdea()




class TextBox extends React.Component {
  render() {
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
