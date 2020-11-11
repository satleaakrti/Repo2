import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import FormApp from './FormApp';
 

class TestRun extends Component{

    render(){
        return (
            <div className="TestRun">
          
          <BrowserRouter>
        <div>
          <div className="header">
            <div><NavLink exact activeClassName="active" to="/">Home</NavLink></div>
            <div>
            <NavLink activeClassName="active" to="/formApp">Click</NavLink><small></small>
            </div>
            </div>
            <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/formApp" component={FormApp} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
          
          </div>
        );
      } 
}

export default TestRun;