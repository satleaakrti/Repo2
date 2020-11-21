import React , {Component} from 'react';
import {connect} from 'react-redux';
import {ageDown, ageUp} from './Action';

class TestRun extends Component{
 render(){
     return (
         <div className= "TestRun">
         <spam>Your Age: {this.props.age}</spam>
       
         <button onClick={this.props.ageUp(1)}>Age Up</button>
         <button onClick={this.props.ageDown(1)}>Age Down</button>
         </div>
     );
 }
}

const mapStateToProps = state => {
    return {
        age: state.reducer.age
   };
};

const mapDispatchToProps = dispatch => {
    return {
       ageUp: (val) => dispatch(ageUp(val)),
       ageDown: (val) => dispatch(ageDown(val))
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRun);