import React, {Component} from 'react';
import Header from './Header';
import Imagen from './Imagen';
import {withRouter} from 'react-router-dom';
import {viedoList} from './constants';

class Singlevideopage extends  Component{
findVideo = ()=>{
    return viedoList.find(item => { return item.id ===parseInt(this.props.match.params.id)

})
};
render(){
    const video = this.findVideo();
    return(
        <div className = "container">
        <Header/>
        <Imagen imgUrl='http://via.placeholder.com/640x360'/>
        <h4>{video.title}</h4>
        <p>{video.desc}</p>
        </div>
    )
}
}
export  default  Singlevideopage;