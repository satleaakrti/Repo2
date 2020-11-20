import React from 'react';
import formReducer from './FormReducer';
import details from './ActionForm';
import {connect} from 'react-redux';

const TestRun = (props) => {

      return(
       
      <div className= "FormApp">
          <h3>Hii, Welcome to React App</h3>
          <div >  
          <label> FirstName: </label>
              <input type="text"
              name= "firstName"
              value={formReducer.fname}
              /> 
            </div>
            <div>
            <label> LastName: </label> 
          <input
            type="text"
            name="lastName"
            value ={formReducer.lname}
            />
           </div>
  
            <div>
            <label> Email: </label>
          <input type="text"  
              name= "email"
               value= {formReducer.email}          />
            </div>
  
            <div>
            <label> Password:   </label>
           <input type="password" 
              name= "password"
              value = {formReducer.password}
               />
            </div>
            
            <div>
            <label> Contact No.: </label>
             <input type="text" 
              name= "contactNo" 
              value = {formReducer.contact}          />
                       </div> 
                      
          <p>
          <button onClick={() =>props.onDetails()}>Click</button>
          </p>
        
          </div>
         // </Provider>
      );
      
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
        onDetails: (fname) => {dispatch(details(fname)) }
       
    }
};
  
  export default connect(mapStateToProps,mapDispatchToProps) (TestRun);