import React, {Component} from 'react';

import Logo from './Logo';

class Header extends Component{

    render(){

      return(  <header className="App-header">
      <Logo className="App-logo" alt="logo" />
      <h1 className="App-title"> TusVideos.com </h1> 
      </header>
    
        )
    }
}
export default Header;