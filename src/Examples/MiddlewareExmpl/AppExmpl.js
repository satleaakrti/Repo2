
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {ageDown, ageUp} from './Action';

class TestRun extends Component{
 render(){
     return (
         <div className= "TestRun">
         <spam>Your Age: {this.props.age}</spam>
       
         <button onClick={this.props.onAgeUp}>Age Up</button>
         <button onClick={this.props.onAgeDown}>Age Down</button>
         </div>
     );
 }
}

const mapStateToProps = state => {
    return {
        age: state.age
   };
};

const mapDispatchToProps = dispatch => {
    return {
       onAgeUp: () => dispatch(ageUp(1)),
       onAgeDown: () => dispatch(ageDown(1))
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRun);