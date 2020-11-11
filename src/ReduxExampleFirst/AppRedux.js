import React from 'react';
import {connect} from 'react-redux' ;

  const TestRun =(props) =>{
      console.log(props);
      return (
       <div className= "TestRun">
       <h1>This is redux example</h1>
       <h3>My Name is: {props.myName}</h3>
       <button onClick={() =>props.changeName("Mark")}>Change</button>
       </div>
      );

  }

  const mapStateToProps = state => {
    return {
       myName: state.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: (name) => {dispatch({type: "CHANGE_NAME", payload:name}) }
       
    }
};
  
  export default connect(mapStateToProps,mapDispatchToProps) (TestRun);