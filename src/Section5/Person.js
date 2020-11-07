import React from "react";
import Radium from 'radium';

// Adding two way binding
const person = (props) => {
    return (
        <div className="Person">
        <p onClick={props.click}>I am a {props.name} and I am {props.age} years old</p>
        <input type= "text" onChange={props.changed} value={props.name} />
        </div>
    )
};
//export default person;
export default Radium(person);