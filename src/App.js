import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div class="one-third column">
            <p>Hello</p>
          </div> 

          <div className="one-third column">
            <p>Hi</p> 
          </div> 

          <div className="one-third column">
            <p>Yo</p> 
          </div> 

          <div className="sixteen columns">
            <p>Yooo</p>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
