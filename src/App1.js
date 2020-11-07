import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Section3/Person'
import Person2 from './Section3/Person2';
import Person3 from './Section3/Person3';
import Person4 from './Section3/Person4';

 class TestRun extends Component{
  // use of state
  state = {
    persons: [
      {name: "Emily" , age : 23},
      {name: "Brown", age: 25},
      {name: "Stephen", age: 28}
    ]
  }

  // Handling events with method
 switchNameHandler = (newName) => {
   //console.log("was clicked:");
   // Manupulating the state
   this.setState({
    persons: [
      {name: newName , age : 23},
      {name: "Brown", age: 26},
      {name: "Stephen", age: 28}
    ]
   });
 }

 // Adding two binding
 nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: "John" , age : 23},
      {name: event.target.value, age: 25},
      {name: "Stephen", age: 28}
    ]
   });
 }

  render(){

    // inline css style
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
       onClick = {this.switchNameHandler.bind(this, "Willen")}>Switch Button</button></p>
       

       1 - functional component
       <Person />  
       2 - functional component with dynamic content
       <Person2 />
       <Person2 />
       3 - working with props
       <Person3 name="John" age = "23" />
       <Person3 name="Mark" age = "26" >My Hobbies : Play Games</Person3>
       <Person3 name="Mary" age = "29" />
       4 - state property
       <Person3 name={this.state.persons[0].name} age = {this.state.persons[0].age} />
       <Person3 name={this.state.persons[1].name} age = {this.state.persons[1].age} 
                click= {this.switchNameHandler.bind(this, "Thomos")} />
       <Person3 name={this.state.persons[2].name} age = {this.state.persons[2].age} />
       5 - Adding Two way binding
       <Person4 name={this.state.persons[0].name} age = {this.state.persons[0].age} />
       <Person4 name={this.state.persons[1].name} age = {this.state.persons[1].age} 
                click= {this.switchNameHandler.bind(this, "Thomos")}
                changed= {this.nameChangedHandler} />
       <Person4 name={this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    ); 
    // jsx component
    // return React.createElement('div', null ,'h1', 'hii, Welocome to react app');
    // return React.createElement('div',{className : 'App'} ,React.createElement('h1', null, 'hii Welcome to react app'));

  }
}

export default TestRun; 

// using the useState() Hook for the state manupulation

/* const App = props => {
const [personState , setPersonState] = useState( {
  persons: [
    {name: "Emily" , age : 23},
    {name: "Brown", age: 25},
    {name: "Stephen", age: 28}
  ]
});

console.log(personState);

const switchNameHandler = () => {
  //console.log("was clicked:");
  // Manupulating the state
  setPersonState({
   persons: [
     {name: "Willen" , age : 23},
     {name: "Brown", age: 26},
     {name: "Stephen", age: 28}
   ]
  });
};

  return(
    <div className="App">
     <h1>Hii, Welcome to React App</h1>
     <p>hello World.</p>
     <p><button onClick = {switchNameHandler}>Switch Button</button></p>

     <Person3 name={personState.persons[0].name} age = {personState.persons[0].age} />
       <Person3 name={personState.persons[1].name} age = {personState.persons[1].age} />
       <Person3 name={personState.persons[2].name} age = {personState.persons[2].age} />
       </div>
  );
};
export default App; */
