import React from 'react';
//import { Provider } from 'react-redux';
//import details from './FormAction';
//import store from './store';
//import {connect} from 'react-redux';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Submit from './Submit';
import {useHistory} from 'react-router-dom'; 
//import formAppReducer from './FormAppReducer';

  const FormApp = (props) => {

  /* const inputData = event => {
    this.props.actions.addToDo({ name: event.target.value });
  };

     const submitData = event => {
    console.log(this.props.name);
    // console.log(this.props.mobile);
    event.preventDefault();
  } */

 // const FormApp = (props) =>{
      //console.log(props.userData);
       const history= useHistory();

      const  handleClick = () => {
        history.push('/submit');
         
       }

    return(
       // <Provider store={store}>
        <div className= "FormApp">
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
        <p>
        <input type="button" value= "Save"onClick={handleClick}  />
        </p>
        <BrowserRouter>
        <Switch>
        <Route path="/submit" component={Submit} /></Switch>
        </BrowserRouter>
      
        </div>
       // </Provider>
    );
    
}





/* const mapStateToProps = state => {
    return {
        userData : state.userData,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDetails: () => {dispatch(details) }
       
    }
}; */

export default FormApp;