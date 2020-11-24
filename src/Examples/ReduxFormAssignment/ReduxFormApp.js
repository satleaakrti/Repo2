import React from 'react';
import details from './ActionForm';
import {connect} from 'react-redux';

const TestRun = (props) => {

      return(
       
      <div className= "FormApp">
          <h3>Hii, Welcome to React App</h3>
          <h3>FirstName: {props.firstName}</h3>
       <h3>LastName: {props.lastName}</h3>
       <h3>Email : {props.email}</h3>
       <h3>Password: {props.password}</h3>
       <h3>Contact: {props.contact}</h3>
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
            value={props.lname}
            />
           </div>
  
            <div>
            <label> Email: </label>
          <input type="text"  
              name= "email"
              value={props.email}
                   />
            </div>
  
            <div>
            <label> Password:   </label>
           <input type="password" 
              name= "password"
              value={props.password}
               />
            </div>
            
            <div>
            <label> Contact No.: </label>
             <input type="text" 
              name= "contactNo" 
              value={props.contact}
                     />
                       </div> 
                      
          <p>
          <button onClick={() => handleSave()}>Click</button>
          </p>
        
          </div>
         // </Provider>
      );
      
  }

  const  handleSave= (props) => {
       props.onDetails();
  }

  const mapStateToProps = state => {
    return {
    //    userData : state.userData,
    firstName : state.fname,
    lastName : state.lname,
    email : state.email,
    password : state.password,
    contact : state.contact
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDetails: (fname) => dispatch(details(fname)) 
       
    }
};
  
  export default connect(mapStateToProps,mapDispatchToProps) (TestRun);