import React, {Component} from 'react';

class Imagen extends Component{
    render(){
      return (  <img src={this.props.imgUrl} width={this.props.imageWidth} className={this.props.className}/>
      )
    }
}
export default Imagen;