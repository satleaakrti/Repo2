import React, {Component} from 'react';
//import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './Login';
//import Dashboard from './Dashboard';
import Home from './Home';
 
class TestRun extends Component{
    render(){
  return (
    <div className="TestRun">
     <Home />
     <Login />
    </div>
  );
}
}
 
export default TestRun;