import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Video from './Video';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <p className="App-intro">
         <Video />
        </p>
      </div>
    );
  }
}

export default App;
