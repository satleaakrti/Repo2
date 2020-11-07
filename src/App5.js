import React, { Component } from 'react';
import './App.css';
import Person from './Section5/Person';
import Radium from 'radium';


class TestRun extends Component{
   
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

   togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
   }
  
    render(){
  
      const style = {
       backgroundColor: 'green',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer',
       ':hover':  { 
           backgroundColor: 'lightGreen',
           color : 'black'
       }
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
        style.backgroundColor="red";
        style[':hover'] = {
            backgroundColor: 'salmon',
            color : 'black'
        }
    }

    // let classes = ['red', 'bold'].join(' ');
     const classes =[];
     if(this.state.persons.length <=2){
         classes.push('red'); // classes =['red']
     }
     if(this.state.persons.length <= 1){
        classes.push('bold'); // classes =['red' , 'bold']
    }

  
      return(
        <div className="App">
         <h1>Hii, Welcome to React App</h1>
         <p className ={classes.join(' ')}>hello World.</p>
         <p><button 
         style={style}
         onClick = {this.togglePersonsHandler}>Toggle Button</button></p>
         {persons}
        </div>
      ); 
      
  
    }
  }
  
 // export default TestRun;
 export default Radium(TestRun); 