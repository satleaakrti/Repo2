import React from "react";

// Working with props and children props
const person3 = (props) => {
    return (
        <div>
        <p onClick={props.click}>I am a {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        </div>
    )
};
export default person3;