import React from 'react';
import {connect} from 'react-redux' ;

  const TestRun =(props) =>{
      console.log(props);
      return (
       <div className= "TestRun">
       <h1>This is redux example</h1>
        <h4>{props.firstName}</h4>
        
       <button onClick={() =>props.changeName("Mark")}>Change</button>
       </div>
      );

  }

  const mapStateToProps = state => {
    return {
       firstName: state.fname,
       lastName: state.lname,
       email: state.email,
       password: state.password,
       contact: state.contact,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: (fname) => {dispatch({type: "CHANGE_NAME", payload:fname}) }
       
    }
};
  
  export default connect(mapStateToProps,mapDispatchToProps) (TestRun);