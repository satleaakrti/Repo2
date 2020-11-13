import React from 'react';
import {connect} from 'react-redux';
import details from './FormAction';
//import FormApp from './FormApp';
//import formAppReducer from './FormAppReducer';

const submit = (props) => {

    return(
        
        <div>
       <h3>FirstName: {this.props.fname}</h3>
       <h3>LastName: {this.props.lname}</h3>
       <h3>Email : {this.props.email}</h3>
       <h3>Password: {this.props.password}</h3>
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
        onDetails: () => {dispatch(details) }
       
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(submit );