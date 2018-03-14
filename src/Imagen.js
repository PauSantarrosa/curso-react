import React, {Component} from 'react';

class Imagen extends Component{
    render(){

      return (  <img src={this.props.imgUrl} className='' alt="200" />
      )
    }
}
export default Imagen;