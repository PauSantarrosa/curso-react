import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'; 
import Imagen from './Imagen';

class Logo extends Component{

    render(){
    return( <NavLink to="/">
     <Imagen imgUrl="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/youtube.svg" imageWidth={200} className="App-logo"/> 
     </NavLink>
    )
    }
}
export default Logo;
