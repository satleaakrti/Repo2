import React, { Component } from 'react';
import './App.css';
import Person from './Section4/Person';

// flexible list
  class TestRun extends Component{
   
    state = {
      persons : [
        {id: 'abc1', name: "Emily" , age : 23},
        {id: 'abc2', name: "Brown", age: 25},
        {id: 'abc3', name: "Stephen", age: 28}
      ], 
      otherState: "some other value",
      showPersons: false
    }
  
   nameChangedHandler = (event, id) => {
       const personIndex = this.state.persons.findIndex(p =>{
           return p.id === id;
       });
     const person = {
         ...this.state.persons[personIndex]
     };
   // pre approach---- const person = Object.assign({}, this.state.persons[personIndex]);

   person.name = event.target.value;
   const persons = {...this.state.persons};
   persons[personIndex] = person;   

    this.setState({ persons: persons});
   }
   //updating state immutably
   deletePersonsHandler = (personIndex) => {
    //const persons =this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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

      if ( this.state.showPersons ){
        persons = (
        <div>
        { this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonsHandler(index)}
            name= {person.name} 
            age= {person.age} 
            key = {person.id}
            changed= {(event) => this.nameChangedHandler(event, person.id)}
            />
        }) }
      </div>
        );
      }
  
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
 
// List and state
 /*  class TestRun extends Component{
   
    state = {
      persons: [
        {name: "Emily" , age : 23},
        {name: "Brown", age: 25},
        {name: "Stephen", age: 28}
      ],
      otherState: "some other value",
      showPersons: false
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
   //updating state immutably
   deletePersonsHandler = (personIndex) => {
    //const persons =this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
}

   // deletePersonsHandler = (personIndex) => {
    //const persons =this.state.persons;
   // persons.splice(personIndex, 1);
   // this.setState({persons: persons})
  // } 

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
        {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonsHandler(index)}
            name= {person.name} 
            age= {person.age} />
        })
        }
      </div>
        );
    }
  
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
  
  export default TestRun;  */