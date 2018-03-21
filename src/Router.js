import React , {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import AboutPage from './AboutPage';
import Singlevideopage from './Singlevideopage';

class Router extends Component{

    render(){ return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={AboutPage} />
        <Route path="/video/:id"  component={Singlevideopage} />
        </Switch>
        </BrowserRouter>
    )
    }
}
export default Router;