import React from 'react';

const TestRun = (props) => {

    return(
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
             value = {props.contact}          />
                      </div> 
                 </div>
    );            
}

export default TestRun;