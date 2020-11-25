import React from 'react';
//import { connect } from 'react-redux';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import appSave from './AppSave';
import {useHistory} from 'react-router-dom'; 


const TestRun = (props) => {
  const history= useHistory();

  const  handleClick = () => {
    history.push('/appSave');
     
   }
  return (
    <div className= "TestRun">
          <h3>Hii, Welcome to React App</h3>
          <div >  
          <label> FirstName: </label>
          <input type="text"
                name= "firstName"
            value={props.fname}
          /> 
            </div>
        <div>
           <label> LastName: </label> 
          <input
            type="text"
            name="lastName"
            value ={props.lname}
            />
           </div>
 
            <div>
            <label> Email: </label>
          <input type="text"  
            name= "email"
               value= {props.email}          />
            </div>
 
            <div>
          <label> Password:   </label>
           <input type="password" 
              name= "password"
              value = {props.password}
               />
            </div>
           
            <div>
            <label> Contact No.: </label>
             <input type="text" 
              name= "contactNo" 
              value = {props.contact}   />
                </div>
         <p>
        <input type="button" value= "Save"onClick={handleClick}  />
        </p>
        <BrowserRouter>
        <Switch>
        <Route path="/appSave" component={appSave} /></Switch>
        </BrowserRouter>
  </div>
  );

}
    // return(
    //  <div className= "TestRun">
    //      <h3>Hii, Welcome to React App</h3>
    //      <div >  
    //      <label> FirstName: </label>
    //          <input type="text"
    //          name= "firstName"
    //          value={props.fname}
    //          /> 
    //        </div>
    //        <div>
    //        <label> LastName: </label> 
    //      <input
    //        type="text"
    //        name="lastName"
    //        value ={props.lname}
    //        />
    //       </div>
 
    //        <div>
    //        <label> Email: </label>
    //      <input type="text"  
    //          name= "email"
    //           value= {props.email}          />
    //        </div>
 
    //        <div>
    //        <label> Password:   </label>
    //       <input type="password" 
    //          name= "password"
    //          value = {props.password}
    //           />
    //        </div>
           
    //        <div>
    //        <label> Contact No.: </label>
    //         <input type="text" 
    //          name= "contactNo" 
    //          value = {props.contact}   />
    //            </div> 
    //            <p>
    //           <button>Save</button>
    //           </p>
    //              </div>
                 
    // );            }

export default TestRun;