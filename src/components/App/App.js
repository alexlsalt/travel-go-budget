import React from 'react';
import './App.css';
import TextBox from '../TextBox/TextBox';
import Button from '../Button/Button';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TextBox />
        <Button />
        <div className="footer">
          <span>Travel Go Budget developed by Alex Morton</span>
        </div>
      </div>
    )
  }
}

export default App;
