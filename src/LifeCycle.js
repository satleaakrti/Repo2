import React, {Component} from 'react';

class TestRun extends  Component{
// first method of life cycle
 constructor(props){
    super(props)
    this.state={name: "John"}
    console.log("initialised");
 }

 // second method of life cycle
 componentDidMount(){
     console.log("fatch some data");
 }

 // fourth method of life cycle
 componentDidUpdate(preProps , preState){
   console.log("updated" , preProps, preState);
 }

// third method of life cycle
render(){
    console.log("rendered");
    return(
     <div className="App">
     <h1>Codders never quit</h1>
     <h2>Life Cycle Methods</h2>
     <button onClick={() => this.setState({name: "Mark"})}>Click</button>
     </div>
    )
  }
} 

export default TestRun;