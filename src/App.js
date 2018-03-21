import React, { Component, Fragment} from 'react';
import './App.css';

import Video from './Video';
import Header from './Header';
import AboutPage from './AboutPage';
import Sidebar from './Sidebar';



class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="App">
       <Header/>
       <section className="App-section">
        <Video/>
        <Sidebar/>
       </section>
      </div>
     </Fragment>
    );
  }
}

export default App;
