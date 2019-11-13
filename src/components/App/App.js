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
          <span>Travel Go Budget developed by <a href="http://alexlsalt.github.io" target="_blank" rel="noopener noreferrer">Alex Morton</a></span>
          <span>View project on <a href="https://github.com/alexlsalt/travel-go-budget/tree/master" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    )
  }
}

export default App;
