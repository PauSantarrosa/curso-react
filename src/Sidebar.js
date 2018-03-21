import React , {Component} from 'react';
import {viedoList} from './constants';
import {NavLink} from 'react-router-dom';


class Sidebar extends Component{
    renderVideoList=()=>{
        return viedoList.map(item =>{
            return(
            <li>
                <NavLink to={"/video/" + item.id}>
                <img src="http://via.placeholder.com/270x135" title={item.id} />
                </NavLink>
            </li>

            );
        })
    }

    render(){
        return (<aside className="sidebar">
        <ul>{this.renderVideoList()}</ul> </aside>
            )
    }
    
}

export default Sidebar;
