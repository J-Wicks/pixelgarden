import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import gardenFenced from './gardenfenced.jpg';

console.log(gardenFenced);
class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar />
        <div id="fencedGarden">
        </div>
      </div>
    );
  }
}

export default App;
