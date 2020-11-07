import React from "react";

import './Person4.css';

// Adding two way binding
const person4 = (props) => {
    return (
        <div className="Person4">
        <p onClick={props.click}>I am a {props.name} and I am {props.age} years old</p>
        <input type= "text" onChange={props.changed} />
        </div>
    )
};
export default person4;