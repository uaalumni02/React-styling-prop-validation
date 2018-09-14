import React, { Component } from 'react';
import Information from './Information/Information';
import { StyleRoot } from 'radium';
import Image from './Image/Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Barack Obama</h1>
          </header>
          <Information />
          <Image />
        </div>
      </StyleRoot>
    );
  }
}

export default App;
