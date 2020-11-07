import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Section4/Person';

// Handeling Dynamic content
class TestRun extends Component{
    // use of state
    state = {
      persons: [
        {name: "Emily" , age : 23},
        {name: "Brown", age: 25},
        {name: "Stephen", age: 28}
      ],
      otherState: "some other value",
      showPersons: false
    }
  
   switchNameHandler = (newName) => {
    
     this.setState({
      persons: [
        {name: newName , age : 23},
        {name: "Brown", age: 26},
        {name: "Stephen", age: 28}
      ]
     });
   }
  
   nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "John" , age : 23},
        {name: event.target.value, age: 25},
        {name: "Stephen", age: 28}
      ]
     });
   }
   togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
   }
  
    render(){
  
      const style = {
       backgroundColor: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
      };

      let persons = null;

      //outputing list

      if ( this.state.showPersons ){
        persons = (
        <div>
        {this.state.persons.map(person => {
            return <Person name= {person.name} age= {person.age} />
        })
        }
      </div>
        );
    }
  /*    if (this.state.showPersons){
          persons = (
          <div>
         <Person name={this.state.persons[0].name} age = {this.state.persons[0].age} />
         <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} 
                  click= {this.switchNameHandler.bind(this, "Thomos")}
                  changed= {this.nameChangedHandler} />
         <Person name={this.state.persons[2].name} age = {this.state.persons[2].age} />
        </div>
          );
      } */
  
      return(
        <div className="App">
         <h1>Hii, Welcome to React App</h1>
         <p>hello World.</p>
         <p><button 
         style={style}
         onClick = {this.togglePersonsHandler}>Toggle Button</button></p>
         {persons}
        </div>
      ); 
      
  
    }
  }
  
  export default TestRun; 



// Rendering content conditionally 
 /* class TestRun extends Component{
  // use of state
  state = {
    persons: [
      {name: "Emily" , age : 23},
      {name: "Brown", age: 25},
      {name: "Stephen", age: 28}
    ],
    otherState: "some other value",
    showPersons: false
  }

 switchNameHandler = (newName) => {
  
   this.setState({
    persons: [
      {name: newName , age : 23},
      {name: "Brown", age: 26},
      {name: "Stephen", age: 28}
    ]
   });
 }

 nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: "John" , age : 23},
      {name: event.target.value, age: 25},
      {name: "Stephen", age: 28}
    ]
   });
 }
 togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
 }

  render(){

  
    const style = {
     backgroundColor: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer'
    };

    return(
      <div className="App">
       <h1>Hii, Welcome to React App</h1>
       <p>hello World.</p>
       <p><button 
       style={style}
       onClick = {this.togglePersonsHandler}>Switch Button</button></p>
       
       {  this.state.showPersons === true ?
           <div>
      
       <Person name={this.state.persons[0].name} age = {this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} 
                click= {this.switchNameHandler.bind(this, "Thomos")}
                changed= {this.nameChangedHandler} />
       <Person name={this.state.persons[2].name} age = {this.state.persons[2].age} />
       </div> : null
       }
      </div>
    ); 
    

  }
}

export default TestRun; _*/