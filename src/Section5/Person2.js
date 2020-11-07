import React from "react";
import Radium from 'radium';
import './Person.css';

// Adding two way binding
const person = (props) => {
    const style = {
    '@media (min width: 500px)':{
        width: '450px'
    }

    }
    return (
        <div className="Person2" style={style}>
        <p onClick={props.click}>I am a {props.name} and I am {props.age} years old</p>
        <input type= "text" onChange={props.changed} value={props.name} />
        </div>
    )
};
//export default person;
export default Radium(person);