import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
 
class TestRun extends Component{
    render(){
  return (
    <div className="TestRun">
  <BrowserRouter>
        <div>
          <div className="header">
            <div><NavLink exact activeClassName="active" to="/">Home</NavLink></div>
            <div>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            </div>
            <div>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
}
 
export default TestRun;