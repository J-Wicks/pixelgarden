import React, { Component } from 'react';
import logo from './logo.svg';

import Sidebar from './Sidebar';
import fencedGarden from './assets/gardenfenced.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div id="fencedGarden">
          <img src={fencedGarden} alt="fenced garden" />
        </div>
      </div>
    );
  }
}

export default App;
