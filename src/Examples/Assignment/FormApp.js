import React, {Component} from 'react';
//import { Provider } from 'react-redux';
import details from './FormAction';
//import store from './store';
import {connect} from 'react-redux';
//import formAppReducer from './FormAppReducer';

//class FormApp extends Component{

//render(){

  const FormApp = () =>{
    return(
       // <Provider store={store}>
        <div className= "FormApp">
        <h3>Hii, Welcome to React App</h3>
        <div >  
        <label> FirstName: </label>
            <input type="text"
            name= "firstName"
            /> 
          </div>
          <div>
          <label> LastName: </label> 
        <input
          type="text"
          name="lastName" />
         </div>

          <div>
          <label> Email: </label>
        <input type="text"  
            name= "email"
                       />
          </div>

          <div>
          <label> Password:   </label>
         <input type="password" 
            name= "password"
             />
          </div>
          
          <div>
          <label> Contact No.: </label>
           <input type="text" 
            name= "contactNo" 
                      />
                     </div>
        <p>
         <button onClick={() => details}>Save</button>
        </p>
        </div>
       // </Provider>
    );
//}

}

const mapStateToProps = state => {
    return {
        userData : state.userData,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDetails: () => {dispatch(details) }
       
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (FormApp);