import React from 'react';
import {connect} from 'react-redux';
import details from './FormAction';
//import FormApp from './FormApp';
//import formAppReducer from './FormAppReducer';

const submit = (props) => {
    console.log(props);
    return(
        
        <div>
       <h3>FirstName: {props.firstName}</h3>
       <h3>LastName: {props.lastName}</h3>
       <h3>Email : {props.email}</h3>
       <h3>Password: {props.password}</h3>
       <h3>Contact: {this.props.contact}</h3>
        </div>
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
        onDetails: (data) => {dispatch(details(data)) }
       
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(submit );