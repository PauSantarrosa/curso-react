
import React, { Component } from 'react';

import Imagen from './Imagen';
class Viedo extends Component{
    render(){
      return(<div className="video">  
      <Imagen imgUrl='http://via.placeholder.com/640x360'/>
      </div>
    )
    }
    
}
export default Viedo;