import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

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

          <div className="one-fifth column">
            <p>Yooo</p>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
