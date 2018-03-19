import React, { Component } from 'react';
import './App.css';

import Video from './Video';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <section className="App-section">
       <Video />
       </section>
      </div>
    );
  }
}

export default App;
