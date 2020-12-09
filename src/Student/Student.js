
    import React from 'react';  
    import Addstudent from './AddStudent';  
    import Studentlist from './Studentlist';  
    import EditStudent from './EditStudent';  
    import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
    import './App.css';  
    function TestRun() {  
      return (  
        <Router>  
          <div className="container">  
            <nav className="navbar navbar-expand-lg navheader">  
              <div className="collapse navbar-collapse" >  
                <ul className="navbar-nav mr-auto">  
                  <li className="nav-item">  
                    <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>  
                  </li>  
                  <li className="nav-item">  
                    <Link to={'/Studentlist'} className="nav-link">Student List</Link>  
                  </li>  
                </ul>  
              </div>  
            </nav> <br />  
            <Switch>  
              <Route exact path='/Addstudent' component={Addstudent} />  
              <Route path='/edit/:id' component={EditStudent} />  
              <Route path='/Studentlist' component={Studentlist} />  
            </Switch>  
          </div>  
        </Router>  
      );  
    }  
      
    export default TestRun;  

