import React from 'react';
import {connect} from 'react-redux';
//import details from './AppAction';

const appSave = (props) => {

    return(
        
        <div className= "AppSave">
        <h1>This is Redux Example:</h1>
       <h3>FirstName: {props.userData.fname}</h3>
       <h3>LastName: {props.userData.lname}</h3>
       <h3>Email : {props.userData.email}</h3>
       <h3>Password: {props.userData.password}</h3>
       <h3>Contact: {props.userData.contact}</h3>
        </div>
    );

}

const mapStateToProps = state => {
    return {
      userData : state.userData,
    // firstName : state.fname,
    // lastName : state.lname,
    // email : state.email,
    // password : state.password,
    // contact : state.contact
    };
};


export default connect(mapStateToProps)(appSave);